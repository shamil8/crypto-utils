import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiProduces } from '@nestjs/swagger';

export function ApiFileResponse(
  ...mimeTypes: string[]
): MethodDecorator & ClassDecorator {
  return applyDecorators(
    ApiOkResponse({
      description: 'File download successful',
      schema: {
        type: 'string',
        format: 'binary',
      },
    }),
    ApiProduces(...mimeTypes),
  );
}
