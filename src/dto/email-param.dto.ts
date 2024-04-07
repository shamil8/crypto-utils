import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class EmailParamDto {
  @ApiProperty({
    required: true,
    description: 'The email address',
    example: 'user@example.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email!: string;
}
