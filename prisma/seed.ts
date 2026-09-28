import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import * as bcrypt from 'bcrypt';
import { Pool } from 'pg';
import { PrismaClient } from '../src/generated/prisma/client.js';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const roles = [
  { name: 'super_admin', permissions: ['*'] },
  { name: 'admin', permissions: ['users.read', 'users.write', 'whatsapp.*'] },
  { name: 'operator', permissions: ['whatsapp.send', 'whatsapp.read'] },
  { name: 'viewer', permissions: ['whatsapp.read'] },
];

async function main() {
  for (const role of roles) {
    await prisma.role.upsert({
      where: { name: role.name },
      create: role,
      update: { permissions: role.permissions },
    });
  }

  const superAdminRole = await prisma.role.findUniqueOrThrow({
    where: { name: 'super_admin' },
  });

  const email = process.env.SEED_ADMIN_EMAIL ?? 'admin@alterera.net';
  const password = process.env.SEED_ADMIN_PASSWORD ?? 'ChangeMe123!';
  const passwordHash = await bcrypt.hash(password, 12);

  const existing = await prisma.user.findUnique({ where: { email } });
  if (!existing) {
    await prisma.user.create({
      data: {
        email,
        passwordHash,
        firstName: 'Super',
        lastName: 'Admin',
        roles: {
          create: [{ roleId: superAdminRole.id }],
        },
      },
    });
    console.log(`Seeded admin user: ${email}`);
  } else {
    console.log(`Admin user already exists: ${email}`);
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
