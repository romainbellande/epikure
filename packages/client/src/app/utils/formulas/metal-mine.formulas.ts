import { BuildingFormulas } from './building-formulas.interface';
import { Resource } from '@/utils/enums/resource.enum';

export const metalMineFormulas: BuildingFormulas = {
  isProducing: (resource: Resource) => resource === Resource.METAL,
  production: (level) => 30 * level * Math.pow(1.1, level),
  cost: (level) => [
    {
      name: Resource.METAL,
      amount: 60 * Math.pow(1.5, level - 1),
    },
    {
      name: Resource.CRYSTAL,
      amount: 15 * Math.pow(1.5, level - 1),
    },
  ],
  consumption: (level) => 10 * level * Math.pow(1.1, level),
};
