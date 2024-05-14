import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

import { Operator } from '../../enums/repository/operator';

export class FilterCommand {
  @ApiProperty({
    required: true,
    example: 'marketId',
    description: 'The field to filter by',
  })
  @IsNotEmpty()
  @IsString()
  public field: string;

  @ApiProperty({
    required: true,
    enum: Operator,
    example: Operator.IS_NULL,
    description: 'The operator for the filter',
  })
  @IsNotEmpty()
  @IsEnum(Operator)
  public operator: Operator;

  @ApiProperty({
    required: false,
    description: 'The value to filter by',
  })
  public value: any;

  constructor(field: string, operator: Operator, value: any) {
    this.field = field;
    this.operator = operator;
    this.value = value;
  }
}
