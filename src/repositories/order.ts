import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { Direction } from '../enums/repository/direction';

export class Order {
  @ApiProperty({ required: true })
  @IsString()
  public field: string;
  @ApiProperty({ required: true, enum: Direction })
  @IsEnum(Direction)
  public direction: Direction;

  constructor(field: string, direction: Direction) {
    this.field = field;
    this.direction = direction;
  }
}
