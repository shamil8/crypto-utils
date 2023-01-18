import { ExceptionType } from '../enums/exceptions/exception-type';
import { ExceptionCodeInterface } from '../exceptions/interfaces/exception-code-interface';

export class ExceptionToApiResponse {
  public static build(
    code: ExceptionCodeInterface,
    description: string,
    type: ExceptionType = ExceptionType.ERROR,
    message: string | null,
  ) {
    let status = 500;
    if (type === ExceptionType.UNAUTHORIZED) {
      status = 401;
    }
    return {
      status,
      description,
      schema: {
        type: 'object',
        properties: {
          code: {
            type: 'integer',
            default: code,
          },
          message: {
            type: 'string',
            example: message ? message : description,
          },
          statusCode: {
            type: 'integer',
            default: status,
          },
        },
      },
    };
  }
}
