import { applyDecorators, Type } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiOkResponse,
  ApiProperty,
  getSchemaPath,
} from '@nestjs/swagger';

class PageResponse<T> {
  @ApiProperty({ description: 'Array of items in the page' })
  rows!: T[];

  @ApiProperty({
    description: 'Total count of items',
    example: 10,
  })
  count!: number;
}

export type PageResType<T> = Promise<PageResponse<T>>;

export const ApiResponsePaginated = <ResourceDto extends Type<unknown>>(
  resource: ResourceDto,
): MethodDecorator & ClassDecorator =>
  applyDecorators(
    ApiExtraModels(PageResponse, resource),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(PageResponse) },
          {
            properties: {
              rows: { type: 'array', items: { $ref: getSchemaPath(resource) } },
            },
          },
        ],
      },
    }),
  );
