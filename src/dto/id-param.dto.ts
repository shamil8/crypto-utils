import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class IdParamDto {
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  id!: string;
}
