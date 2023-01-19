import { applyDecorators, Type } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiOkResponse,
  ApiProperty,
  getSchemaPath,
} from '@nestjs/swagger';

class PageResponse<T> {
  rows!: T[];

  @ApiProperty()
  count!: number;
}

export type PageResType<T> = Promise<PageResponse<T>>;

export const ApiResponsePaginated = <DataDto extends Type<unknown>>(
  dataDto: DataDto,
): MethodDecorator & ClassDecorator =>
  applyDecorators(
    ApiExtraModels(PageResponse, dataDto),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(PageResponse) },
          {
            properties: {
              rows: {
                type: 'array',
                items: { $ref: getSchemaPath(dataDto) },
              },
            },
          },
        ],
      },
    }),
  );
