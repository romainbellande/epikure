import { BuildingFormulas } from './building-formulas.interface';
import { Resource } from '@/utils/enums/resource.enum';

export const crystalMineFormulas: BuildingFormulas = {
  isProducing: (resource: Resource) => resource === Resource.CRYSTAL,
  production: (level) => 20 * level * Math.pow(1.1, level),
  cost: (level) => [
    {
      name: Resource.METAL,
      amount: 48 * Math.pow(1.6, level - 1),
    },
    {
      name: Resource.CRYSTAL,
      amount: 24 * Math.pow(1.6, level - 1),
    },
  ],
  consumption: (level) => 10 * level * Math.pow(1.1, level),
};
