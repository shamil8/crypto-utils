import { ExceptionType } from '../enums/exceptions/exception-type';
import { ExceptionCodeBase } from '../enums/exceptions/exception-code-base';
import { ExceptionCodeInterface } from './interfaces/exception-code-interface';
import { CodeException } from './code.exception';

export class DomainException extends Error {
  public type: ExceptionType = ExceptionType.ERROR;
  public static code: ExceptionCodeInterface = new CodeException(
    ExceptionCodeBase.GENERIC_ERROR,
  );

  constructor(private _message: string, private _code: ExceptionCodeInterface) {
    super(_message);
  }

  public get code(): number {
    return this._code.getCode();
  }
}
