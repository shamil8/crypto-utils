import { ExceptionCodeBase } from '../enums/exceptions/exception-code-base';
import { CodeException } from './code.exception';
import { DomainException } from './domain.exception';

export class InvariantViolationException extends DomainException {
  constructor(_message: string | null) {
    super(
      _message || 'Invariant violation exceptions',
      new CodeException(ExceptionCodeBase.INVARIANT_VIOLATION),
    );
  }
}
