import { Recipe, RecipeCategory } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class FindManyRecipeResponse implements Recipe {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  authorId: string;

  @ApiProperty()
  difficulty: number;

  @ApiProperty({ example: RecipeCategory.starter })
  category: RecipeCategory;

  @ApiProperty()
  active: boolean;

  @ApiProperty({ example: 'http://api.epikure.con/files/my-picture.png' })
  photoUrl: string | null;

  @ApiProperty({ description: 'duration in minutes' })
  duration: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
