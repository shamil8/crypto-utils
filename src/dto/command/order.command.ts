import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

import { Direction } from '../../enums/repository/direction';

export class OrderCommand {
  @ApiProperty({
    required: true,
    description: 'The field to order by',
    example: 'createdAt',
  })
  @IsNotEmpty()
  @IsString()
  public field: string;

  @ApiProperty({
    required: true,
    enum: Direction,
    description: 'The direction of the ordering',
    example: Direction.ASC,
  })
  @IsNotEmpty()
  @IsEnum(Direction)
  public direction: Direction;

  constructor(field: string, direction: Direction) {
    this.field = field;
    this.direction = direction;
  }
}
