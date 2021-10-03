/*
  Warnings:

  - Added the required column `category` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `difficulty` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RecipeCategory" AS ENUM ('starter', 'main', 'desert', 'side');

-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "category" "RecipeCategory" NOT NULL,
ADD COLUMN     "difficulty" INTEGER NOT NULL,
ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "photoUrl" TEXT;
