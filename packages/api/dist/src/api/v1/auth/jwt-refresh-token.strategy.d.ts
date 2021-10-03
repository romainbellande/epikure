import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { UserService } from '@/api/v1/user/user.service';
import { Configuration } from '@/configuration';
declare const JwtRefreshTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtRefreshTokenStrategy extends JwtRefreshTokenStrategy_base {
    private readonly configService;
    private readonly userService;
    constructor(configService: ConfigService<Configuration>, userService: UserService);
    validate(request: Request, payload: any): Promise<import(".prisma/client").User>;
}
export {};
