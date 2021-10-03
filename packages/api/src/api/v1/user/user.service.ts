import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { hash, isMatch } from '@/utils/hash';
import { PrismaService } from '@/services/prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async setCurrentRefreshToken(
    userId: string,
    refreshToken: string,
  ): Promise<void> {
    const refreshTokenHash = await hash(refreshToken);
    await this.updateUser({
      where: { id: userId },
      data: { refreshTokenHash },
    });
  }

  async getUserIfRefreshTokenMatches(
    userId: string,
    refreshToken: string,
  ): Promise<User> {
    const user = await this.findUnique({ id: userId });

    const isRefreshTokenMatching = await isMatch(
      refreshToken,
      user.refreshTokenHash,
    );

    if (isRefreshTokenMatching) {
      return user;
    }
  }

  async createOne(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  findUnique(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
