import { BadRequestException } from '@nestjs/common';

interface FindManyParamsBase {
  skip?: number | undefined;
  take?: number | undefined;
  cursor?: unknown | undefined;
  where?: unknown | undefined;
  orderBy?: unknown | undefined;
}

interface CrudService<
  FindManyParams extends FindManyParamsBase,
  FindManyResponse,
> {
  findMany(params: FindManyParams): Promise<FindManyResponse[]>;
}

interface FindManyQuery {
  cursor: string;
  where: string;
  orderBy: string;
}

export const findMany = <
  FindManyParams extends FindManyParamsBase,
  FindManyResponse,
>(
  service: CrudService<FindManyParams, FindManyResponse>,
) =>
  function ({
    cursor,
    where,
    orderBy,
  }: FindManyQuery): Promise<FindManyResponse[]> {
    const cursorQuery: FindManyParams['cursor'] = cursor
      ? { id: cursor }
      : undefined;
    const skip: FindManyParams['skip'] = cursor ? 1 : 0;
    let whereQuery: FindManyParams['where'];
    let orderByQuery: FindManyParams['orderBy'];

    try {
      whereQuery = where ? JSON.parse(where) : undefined;
    } catch (e) {
      throw new BadRequestException('query parameter "where" is invalid');
    }

    try {
      orderByQuery = orderBy ? JSON.parse(orderBy) : undefined;
    } catch (e) {
      throw new BadRequestException('query parameter "orderBy" is invalid');
    }
    return service.findMany({
      where: whereQuery,
      cursor: cursorQuery,
      skip,
      orderBy: orderByQuery,
      take: 30,
    } as any);
  };
