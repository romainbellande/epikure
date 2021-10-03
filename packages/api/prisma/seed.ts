import { PrismaClient, Prisma } from '@prisma/client';
import { defaultUserSeed } from '@/seeds/default-user.seed';
import { prismaMiddleware } from '@/services/prisma/prisma.middleware';

const prisma = new PrismaClient();

prisma.$use(prismaMiddleware);

const removeAllRecords = async () => {
  const prisma = new PrismaClient();
  const modelNames = Prisma.dmmf.datamodel.models.map((model) => model.name);
  return Promise.all(
    modelNames.map((modelName) => prisma[modelName.toLowerCase()].deleteMany()),
  );
};

export const main = async () => {
  await removeAllRecords();

  console.info('all records removed');

  console.info('seeding');

  const defaultUser = await prisma.user.create({
    data: defaultUserSeed,
  });

  console.debug(`user ${defaultUser.pseudo} created`);
};

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
