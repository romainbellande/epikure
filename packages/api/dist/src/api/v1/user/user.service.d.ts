import { PrismaService } from '@/services/prisma/prisma.service';
import { User, Prisma } from '@prisma/client';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    setCurrentRefreshToken(userId: string, refreshToken: string): Promise<void>;
    getUserIfRefreshTokenMatches(userId: string, refreshToken: string): Promise<User>;
    createOne(data: Prisma.UserCreateInput): Promise<User>;
    updateUser(params: {
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
    }): Promise<User>;
    findUnique(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User | null>;
    findMany(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.UserOrderByWithAggregationInput;
    }): Promise<User[]>;
}
