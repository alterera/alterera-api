import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { describe, expect, it } from 'vitest';
import { MessageType } from '../domain/enums/message-type.enum.js';
import { SendMessageDto } from './send-message.dto.js';

describe('SendMessageDto', () => {
  it('preserves nested template parameter fields after validation', async () => {
    const plain = {
      to: '919876543210',
      type: MessageType.TEMPLATE,
      templateName: 'otp_verification',
      language: 'en_US',
      components: [
        {
          type: 'body',
          parameters: [{ type: 'text', text: '123456' }],
        },
        {
          type: 'button',
          sub_type: 'url',
          index: '0',
          parameters: [{ type: 'text', text: '123456' }],
        },
      ],
    };

    const dto = plainToInstance(SendMessageDto, plain);
    const errors = await validate(dto);

    expect(errors).toHaveLength(0);
    expect(dto.components?.[0]?.parameters?.[0]).toEqual({
      type: 'text',
      text: '123456',
    });
    expect(dto.components?.[1]?.parameters?.[0]).toEqual({
      type: 'text',
      text: '123456',
    });
  });
});
