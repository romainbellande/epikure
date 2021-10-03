import { UserService } from './user.service';
import { User, Prisma } from '@prisma/client';
export declare class UserController {
    service: UserService;
    constructor(service: UserService);
    createOne(user: Prisma.UserCreateInput): Promise<User>;
}
