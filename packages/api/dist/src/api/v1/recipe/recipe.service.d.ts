import { PrismaService } from '@/services/prisma/prisma.service';
import { Recipe, Prisma } from '@prisma/client';
import { FindManyParams } from '@/api/v1/recipe/interfaces/find-many.params';
export declare class RecipeService {
    private prisma;
    constructor(prisma: PrismaService);
    createOne(data: Prisma.RecipeCreateInput): Promise<Recipe>;
    findMany(params?: FindManyParams): Promise<Recipe[]>;
}
