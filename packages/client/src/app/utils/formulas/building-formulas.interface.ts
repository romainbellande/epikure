import { Resource } from '@/utils/enums/resource.enum';

interface CostItem {
  name: Resource;
  amount: number;
}

type Cost = (level: number) => CostItem[];

export interface BuildingFormulas {
  isProducing(resource: Resource): boolean;
  production(level: number): number;
  cost: Cost;
  consumption(level: number): number;
}
