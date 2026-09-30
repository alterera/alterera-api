import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { MessageType } from '../domain/enums/message-type.enum.js';

class TemplateParameterDto {
  @ApiProperty({ example: 'text' })
  @IsString()
  @IsNotEmpty()
  type!: string;

  @ApiPropertyOptional({ example: '123456' })
  @IsOptional()
  @IsString()
  text?: string;
}

class TemplateComponentDto {
  @ApiProperty()
  @IsString()
  type!: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  sub_type?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  index?: string;

  @ApiPropertyOptional({ type: [TemplateParameterDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TemplateParameterDto)
  parameters?: TemplateParameterDto[];
}

export class SendMessageDto {
  @ApiProperty({ example: '919876543210' })
  @IsString()
  @IsNotEmpty()
  to!: string;

  @ApiProperty({ enum: MessageType, example: MessageType.TEMPLATE })
  @IsEnum(MessageType)
  type!: MessageType;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  body?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  templateName?: string;

  @ApiPropertyOptional({ example: 'en' })
  @IsOptional()
  @IsString()
  language?: string;

  @ApiPropertyOptional({ type: [TemplateComponentDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TemplateComponentDto)
  components?: TemplateComponentDto[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  mediaUrl?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  caption?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  filename?: string;

  @ApiPropertyOptional({ type: 'object', additionalProperties: true })
  @IsOptional()
  @IsObject()
  interactive?: Record<string, unknown>;
}
