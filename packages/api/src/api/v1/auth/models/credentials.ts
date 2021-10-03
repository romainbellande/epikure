import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Credentials as ICredentials } from '@/shared/auth';
import { defaultUserSeed } from '@/seeds/default-user.seed';

const { email, password } = defaultUserSeed;

export class Credentials implements ICredentials {
  @ApiProperty({ example: email })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: password })
  @IsNotEmpty()
  password: string;
}
