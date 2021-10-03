import { Recipe, RecipeCategory } from '@prisma/client';
export declare class FindManyRecipeResponse implements Recipe {
    id: string;
    name: string;
    authorId: string;
    difficulty: number;
    category: RecipeCategory;
    active: boolean;
    photoUrl: string | null;
    duration: number;
    createdAt: Date;
    updatedAt: Date;
}
