import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UserDto } from '@/api/v1/user/user.dto';
import { UserService } from '@/api/v1//user/user.service';
import { AccessTokenResponse } from './access-token-response';
import { ConfigService } from '@nestjs/config';
import { Configuration } from '@/configuration';
export declare class AuthService {
    private userService;
    private jwtService;
    private configService;
    constructor(userService: UserService, jwtService: JwtService, configService: ConfigService<Configuration>);
    validateUser(email: string, pass: string): Promise<any>;
    getRefreshTokenCookie(user: User): string;
    getAccessTokenCookie(user: User): string;
    signin(user: User): Promise<AccessTokenResponse>;
    signup({ email, pseudo, password }: UserDto): Promise<User>;
    private createCookie;
}
