import { ExceptionCodeBase } from '../enums/exceptions/exception-code-base';
import { ExceptionType } from '../enums/exceptions/exception-type';
import { CodeException } from './code.exception';
import { ExceptionCodeInterface } from './interfaces/exception-code-interface';

export class DomainException extends Error {
  public type: ExceptionType = ExceptionType.ERROR;
  public static code: ExceptionCodeInterface = new CodeException(
    ExceptionCodeBase.GENERIC_ERROR,
  );

  constructor(
    private readonly _message: string,
    private readonly _code: ExceptionCodeInterface,
  ) {
    super(_message);
  }

  public get code(): number {
    return this._code.getCode();
  }
}
