import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../database/prisma.service.js';
import type { CreateUserDto } from './dto/create-user.dto.js';
import type { UpdateUserDto } from './dto/update-user.dto.js';
import { UsersRepository } from './users.repository.js';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly prisma: PrismaService,
  ) {}

  async list(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const [items, total] = await Promise.all([
      this.usersRepository.findMany(skip, limit),
      this.usersRepository.count(),
    ]);

    return {
      items: items.map((user) => this.toSafeUser(user)),
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit) || 1,
      },
    };
  }

  async findById(id: string) {
    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.toSafeUser(user);
  }

  async create(dto: CreateUserDto) {
    const existing = await this.usersRepository.findByEmail(dto.email);
    if (existing) {
      throw new ConflictException('Email already in use');
    }

    const roles = await this.prisma.role.findMany({
      where: { name: { in: dto.roles } },
    });

    const passwordHash = await bcrypt.hash(dto.password, 12);
    const user = await this.usersRepository.create({
      email: dto.email,
      passwordHash,
      firstName: dto.firstName,
      lastName: dto.lastName,
      roles: {
        create: roles.map((role) => ({
          role: { connect: { id: role.id } },
        })),
      },
    });

    return this.toSafeUser(user);
  }

  async update(id: string, dto: UpdateUserDto) {
    await this.findById(id);

    const data: Record<string, unknown> = {
      firstName: dto.firstName,
      lastName: dto.lastName,
      isActive: dto.isActive,
    };

    if (dto.password) {
      data.passwordHash = await bcrypt.hash(dto.password, 12);
    }

    if (dto.roles) {
      const roles = await this.prisma.role.findMany({
        where: { name: { in: dto.roles } },
      });

      data.roles = {
        deleteMany: {},
        create: roles.map((role) => ({
          role: { connect: { id: role.id } },
        })),
      };
    }

    const user = await this.usersRepository.update(id, data);
    return this.toSafeUser(user);
  }

  async remove(id: string) {
    await this.findById(id);
    await this.usersRepository.softDelete(id);
    return { success: true };
  }

  toSafeUser(user: {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    isActive: boolean;
    roles: Array<{ role: { name: string } }>;
  }) {
    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      isActive: user.isActive,
      roles: user.roles.map((item) => item.role.name),
    };
  }
}
