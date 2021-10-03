import { applyDecorators } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';

export const FindMany = () =>
  applyDecorators(
    ApiQuery({
      name: 'cursor',
      type: 'string',
      required: false,
      example: '01f4855a-c238-450f-90fc-df91e8f72196',
    }),
    ApiQuery({ name: 'where', type: 'string', required: false }),
    ApiQuery({
      name: 'orderBy',
      type: 'string',
      required: false,
      example: '{ "createdAt": "desc" }',
    }),
  );
