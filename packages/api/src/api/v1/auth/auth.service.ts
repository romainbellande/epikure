import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, Prisma } from '@prisma/client';

import { encrypt } from '@/utils/crypto';
import { isMatch } from '@/utils/hash';
import { UserDto } from '@/api/v1/user/user.dto';
import { UserService } from '@/api/v1//user/user.service';
import { AccessTokenResponse } from './access-token-response';
import { ConfigService } from '@nestjs/config';
import { Configuration, JwtToken } from '@/configuration';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService<Configuration>,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const encryptedEmail: string = await encrypt(email);
    const user = await this.userService.findUnique({ email: encryptedEmail });
    console.debug('user', user);

    if (user && isMatch(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  getRefreshTokenCookie(user: User) {
    const payload = { email: user.email, sub: user.id };
    const refreshTokenConfig = this.configService.get<JwtToken>('refreshToken');
    const refreshToken = this.jwtService.sign(payload, refreshTokenConfig);
    return this.createCookie({
      key: 'Refresh',
      token: refreshToken,
      expiresIn: refreshTokenConfig.expiresIn,
    });
  }

  getAccessTokenCookie(user: User) {
    const payload = { email: user.email, sub: user.id };
    const accessTokenConfig = this.configService.get<JwtToken>('accessToken');
    const accessToken = this.jwtService.sign(payload, accessTokenConfig);
    return this.createCookie({
      key: 'Authorization',
      token: accessToken,
      expiresIn: accessTokenConfig.expiresIn,
    });
  }

  async signin(user: User): Promise<AccessTokenResponse> {
    const payload = { email: user.email, sub: user.id };
    const refreshTokenConfig = this.configService.get<JwtToken>('refreshToken');
    const refreshToken = this.jwtService.sign(payload, refreshTokenConfig);

    const accessTokenConfig = this.configService.get<JwtToken>('accessToken');
    const accessToken = this.jwtService.sign(payload, accessTokenConfig);

    return {
      refreshToken,
      accessToken,
    };
  }

  async signup({ email, pseudo, password }: UserDto): Promise<User> {
    return this.userService.createOne({
      email,
      pseudo,
      password,
    });
  }

  private createCookie({ token, expiresIn, key }): string {
    return `${key}=${token}; HttpOnly; Path=/; Secure; Domain=epikure.localhost; Max-Age=${expiresIn}`;
  }
}
