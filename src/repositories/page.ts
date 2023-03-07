import { InvariantViolationException } from '../exceptions/invariant-violation.exception';

export class Page {
  constructor(
    private readonly _pageNumber: number = 1,
    private readonly _limit: number | null,
  ) {
    if (_pageNumber < 1) {
      throw new InvariantViolationException(
        'Page number should be greater than 0',
      );
    }

    if (_limit !== null && _limit < 1) {
      throw new InvariantViolationException('Limit should be greater than 0');
    }
  }

  get page(): number {
    return this._pageNumber;
  }

  get limit(): number | undefined {
    return this._limit ?? undefined;
  }

  get offset(): number {
    return (this.page - 1) * (this.limit ?? 0);
  }
}
