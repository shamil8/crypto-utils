import { ApiProperty } from '@nestjs/swagger';
import {
  IsISO8601,
  Validate,
  ValidateIf,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

// Custom validator to ensure 'from' is before 'to'
@ValidatorConstraint({ name: 'isBefore', async: false })
export class IsBeforeConstraint implements ValidatorConstraintInterface {
  validate(value: string, args: ValidationArguments): boolean {
    const [relatedPropertyName] = args.constraints;
    const relatedValue = (args.object as any)[relatedPropertyName];

    if (!relatedValue) {
      return true;
    }

    const relatedDate = new Date(relatedValue);

    relatedDate.setDate(relatedDate.getDate() + 1);

    return new Date(value) <= relatedDate;
  }

  defaultMessage(args: ValidationArguments): string {
    return `$property must be before or equal to ${args.constraints[0]} plus one day.`;
  }
}

@ValidatorConstraint({ name: 'isBefore', async: false })
export class IsMaxDateConstraint implements ValidatorConstraintInterface {
  validate(date: string): boolean {
    const parsedDate = new Date(date);

    return parsedDate <= new Date();
  }

  defaultMessage(): string {
    return 'End date cannot be in the future';
  }
}

export class FromToCommand {
  @ApiProperty({
    example: '2023-03-03T09:00:00.138Z',
    description: 'Start date (ISO8601 format)',
    required: false,
  })
  @ValidateIf((o) => o.to !== undefined) // Validate 'from' if 'to' is provided
  @IsISO8601()
  @Validate(IsBeforeConstraint, ['to']) // Ensure 'from' is before 'to'
  from?: string;

  @ApiProperty({
    example: '2023-03-05T09:00:00.138Z',
    description: 'End date (ISO8601 format)',
    required: false,
  })
  @ValidateIf((o) => o.from !== undefined) // Validate 'to' if 'from' is provided
  @IsISO8601()
  @Validate(IsMaxDateConstraint)
  to?: string;
}
