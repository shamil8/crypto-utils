import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class IdParamDto {
  @ApiProperty({
    required: true,
    description: 'The identifier of the resource',
    example: 'EKFKV2WCDJK8',
  })
  @IsString()
  @IsNotEmpty()
  id!: string;
}
