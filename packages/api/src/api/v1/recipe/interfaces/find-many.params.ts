import { Prisma } from '@prisma/client';

export interface FindManyParams {
  skip?: number;
  take?: number;
  cursor?: Prisma.RecipeWhereUniqueInput;
  where?: Prisma.RecipeWhereInput;
  orderBy?: Prisma.RecipeOrderByWithAggregationInput;
}
