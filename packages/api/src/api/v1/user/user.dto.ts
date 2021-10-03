import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  Validate,
  Matches,
} from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'kikoo9000' })
  pseudo: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ example: 'jdoe@example.com' })
  email: string;

  @IsNotEmpty()
  @Matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, {
    message:
      'password must have at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character',
  })
  @ApiProperty()
  password: string;
}
