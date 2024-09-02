import { ApiProperty } from '@nestjs/swagger';
import { IsISO8601, IsNotEmpty, Validate } from 'class-validator';

import { IsBeforeConstraint, IsMaxDateConstraint } from './from-to.command';

export class FromToRequiredCommand {
  @ApiProperty({
    example: '2023-03-03T09:00:00.138Z',
    description: 'Date from',
    required: true,
  })
  @IsNotEmpty()
  @IsISO8601()
  @Validate(IsBeforeConstraint, ['to'])
  from!: string;

  @ApiProperty({
    example: '2023-03-05T09:00:00.138Z',
    description: 'Date to',
    required: true,
  })
  @IsNotEmpty()
  @IsISO8601()
  @Validate(IsMaxDateConstraint)
  to!: string;
}
