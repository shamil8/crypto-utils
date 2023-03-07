import { ExceptionCodeBase } from '../enums/exceptions/exception-code-base';
import { ExceptionCodeInterface } from './interfaces/exception-code-interface';

/**
 *
 */
export class CodeException implements ExceptionCodeInterface {
  protected _code: number;

  constructor(code: ExceptionCodeBase | number) {
    this._code = parseInt(code.toString());
  }

  getCode(): number {
    return this._code;
  }

  get value(): number {
    return this._code;
  }
}
