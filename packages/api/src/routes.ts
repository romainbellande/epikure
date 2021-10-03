import { Routes } from '@nestjs/core';
import { AuthModule } from './api/v1/auth/auth.module';
import { UserModule } from './api/v1/user/user.module';
import { RecipeModule } from '@/api/v1/recipe/recipe.module';

export const routes: Routes = [
  {
    path: '/api',
    children: [
      {
        path: '/v1',
        children: [
          {
            path: '/auth',
            module: AuthModule,
          },
          {
            path: '/users',
            module: UserModule,
          },
          {
            path: '/recipes',
            module: RecipeModule,
          },
        ],
      },
    ],
  },
];
