import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { Operator } from '../enums/repository/operator';

export class Filter {
  @ApiProperty({ required: true, example: 'marketId' })
  @IsString()
  public field: string;

  @ApiProperty({ required: true, enum: Operator })
  @IsEnum(Operator)
  public operator: Operator;

  @ApiProperty({ required: false })
  public value: any;

  constructor(field: string, operator: Operator, value: any) {
    this.field = field;
    this.operator = operator;
    this.value = value;
  }
}
