import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class IdParamDto {
  @ApiProperty({
    required: true,
    description: 'The identifier of the resource',
    example: 'EKFKV2WCDJK8',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(155)
  id!: string;
}
