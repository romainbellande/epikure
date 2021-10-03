import {
  Controller,
  Request,
  Post,
  UseGuards,
  Body,
  Get,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from '../user/user.dto';
import { AccessTokenResponse } from './access-token-response';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Credentials } from './models/credentials';
import { UserService } from '@/api/v1/user/user.service';

@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  @ApiBody({ type: Credentials })
  @ApiResponse({ type: AccessTokenResponse })
  async signin(@Request() req): Promise<AccessTokenResponse> {
    const refreshTokenCookie = this.authService.getRefreshTokenCookie(req.user);
    const accessTokenCookie = this.authService.getAccessTokenCookie(req.user);

    await this.userService.setCurrentRefreshToken(
      req.user.id,
      refreshTokenCookie,
    );

    req.res.setHeader('Set-Cookie', [refreshTokenCookie, accessTokenCookie]);
    req.res.status(200);

    return this.authService.signin(req.user);
  }

  @Post('/signup')
  async signup(@Body() userDto: UserDto): Promise<User> {
    return this.authService.signup(userDto);
  }

  @ApiResponse({ type: AccessTokenResponse })
  @Get('/refresh')
  async refresh(@Request() req): Promise<AccessTokenResponse> {
    const accessTokenCookie = this.authService.getAccessTokenCookie(req.user);
    req.res.setHeader('Set-Cookie', accessTokenCookie);
    return req.user;
  }
}
