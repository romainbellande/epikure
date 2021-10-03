import { User } from '@prisma/client';
import { UserDto } from '../user/user.dto';
import { AccessTokenResponse } from './access-token-response';
import { AuthService } from './auth.service';
import { UserService } from '@/api/v1/user/user.service';
export declare class AuthController {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UserService);
    signin(req: any): Promise<AccessTokenResponse>;
    signup(userDto: UserDto): Promise<User>;
    refresh(req: any): Promise<AccessTokenResponse>;
}
