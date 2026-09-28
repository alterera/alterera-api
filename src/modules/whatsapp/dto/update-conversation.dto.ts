import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsString } from 'class-validator';

export class UpdateConversationDto {
  @ApiProperty({ enum: ['open', 'closed', 'archived'] })
  @IsString()
  @IsIn(['open', 'closed', 'archived'])
  status!: string;
}
