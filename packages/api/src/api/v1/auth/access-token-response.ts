import { ApiProperty } from '@nestjs/swagger';
import { SignInResponse } from '@/shared/auth';

export class AccessTokenResponse implements SignInResponse {
  @ApiProperty()
  accessToken: string;

  @ApiProperty()
  refreshToken: string;
}
