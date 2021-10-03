import { Prisma, RecipeCategory, RecipeIngredientUnit } from '@prisma/client';
import { commerce, datatype, internet } from 'faker';
import { times } from 'lodash';

export const defaultUserSeed: Prisma.UserCreateInput = {
  email: 'john@example.com',
  pseudo: 'jdoe',
  password: 'johndoe',
  recipes: {
    create: times(100).map(() => ({
      name: commerce.productName(),
      difficulty: datatype.number(3),
      category: RecipeCategory.starter,
      active: datatype.boolean(),
      photoUrl: internet.url(),
      duration: datatype.number(100),
      ingredients: {
        create: times(5).map(() => ({
          unit: RecipeIngredientUnit.cc,
          quantity: datatype.number(300),
          ingredient: {
            create: {
              name: commerce.productName(),
              vegetarian: datatype.boolean(),
              photoUrl: internet.url(),
            },
          },
        })),
      },
    })),
  },
};
