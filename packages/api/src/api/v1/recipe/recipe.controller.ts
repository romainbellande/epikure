import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { Recipe } from '@prisma/client';
import { RecipeService } from './recipe.service';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FindManyRecipeResponse } from './responses/find-many-recipe.response';
import { FindMany } from '@/decorators/find-many.decorator';
import { findMany } from '@/utils/find-many';
import { FindManyParams } from './interfaces/find-many.params';
import { JwtAuthGuard } from '@/api/v1/auth/jwt-auth.guard';

@Controller('')
@ApiTags('Recipe')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class RecipeController {
  constructor(private readonly service: RecipeService) {}

  @Get()
  @FindMany()
  @ApiResponse({ type: FindManyRecipeResponse, isArray: true })
  public findMany(
    @Query('cursor') cursor: string,
    @Query('where') where = '',
    @Query('orderBy') orderBy = '',
  ): Promise<Recipe[]> {
    return findMany<FindManyParams, Recipe>(this.service)({
      cursor,
      where,
      orderBy,
    });
  }
}
