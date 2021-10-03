import { Prisma } from '@prisma/client';
import { encrypt } from '@/utils/crypto';

export const prismaMiddleware: Prisma.Middleware = async (
  params,
  next,
): Promise<any> => {
  if (params.model === 'User') {
    if (
      params.action === 'create' ||
      (params.action === 'update' && params.args?.data?.email)
    ) {
      const { email } = params.args.data;
      params.args.data.email = await encrypt(email);
    }
  }
  return next(params);
};
