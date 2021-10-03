import { Controller, Post, UseGuards } from '@nestjs/common';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { User, Prisma } from '@prisma/client';

@ApiTags('User')
@ApiBearerAuth()
@Controller('')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(public service: UserService) {}

  @Post()
  public createOne(user: Prisma.UserCreateInput): Promise<User> {
    return this.service.createOne(user);
  }
}
