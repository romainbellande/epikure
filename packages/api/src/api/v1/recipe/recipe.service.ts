import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/services/prisma/prisma.service';
import { Recipe, Prisma } from '@prisma/client';
import { FindManyParams } from '@/api/v1/recipe/interfaces/find-many.params';

@Injectable()
export class RecipeService {
  constructor(private prisma: PrismaService) {}

  async createOne(data: Prisma.RecipeCreateInput): Promise<Recipe> {
    return this.prisma.recipe.create({
      data,
    });
  }

  async findMany(params: FindManyParams = {}): Promise<Recipe[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.recipe.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
