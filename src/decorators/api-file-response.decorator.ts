import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiProduces } from '@nestjs/swagger';

export function ApiFileResponse(
  ...mimeTypes: string[]
): MethodDecorator & ClassDecorator {
  return applyDecorators(
    ApiOkResponse({
      schema: {
        type: 'string',
        format: 'binary',
      },
    }),
    ApiProduces(...mimeTypes),
  );
}
