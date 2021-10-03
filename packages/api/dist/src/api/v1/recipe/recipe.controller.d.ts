import { Recipe } from '@prisma/client';
import { RecipeService } from './recipe.service';
export declare class RecipeController {
    private readonly service;
    constructor(service: RecipeService);
    findMany(cursor: string, where?: string, orderBy?: string): Promise<Recipe[]>;
}
