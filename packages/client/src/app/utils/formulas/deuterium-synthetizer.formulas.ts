import { BuildingFormulas } from './building-formulas.interface';
import { Resource } from '@/utils/enums/resource.enum';

export const deuteriumSynthetizerFormulas: BuildingFormulas = {
  isProducing: (resource: Resource) => resource === Resource.DEUTERIUM,
  production: (level) => 10 * level * Math.pow(1.1, level),
  cost: (level) => [
    {
      name: Resource.METAL,
      amount: 225 * Math.pow(1.5, level - 1),
    },
    {
      name: Resource.CRYSTAL,
      amount: 75 * Math.pow(1.5, level - 1),
    },
  ],
  consumption: (level) => 20 * level * Math.pow(1.1, level),
};
