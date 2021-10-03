import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { routes } from './routes';
import { UserModule } from './api/v1/user/user.module';
import { AuthModule } from './api/v1/auth/auth.module';
import { configuration } from '@/configuration';
import { RecipeModule } from './api/v1/recipe/recipe.module';
import { PrismaModule } from '@/services/prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      ignoreEnvFile: true,
      isGlobal: true,
    }),
    RouterModule.register(routes),
    PrismaModule,
    UserModule,
    AuthModule,
    RecipeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
