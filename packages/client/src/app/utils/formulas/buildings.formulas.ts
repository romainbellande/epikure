import { Building } from '@/utils/enums/building.enum';
import { metalMineFormulas } from './metal-mine.formulas';
import { crystalMineFormulas } from './crystal-mine.formulas';
import { deuteriumSynthetizerFormulas } from './deuterium-synthetizer.formulas';
import { BuildingFormulas } from './building-formulas.interface';

type Buildings = {
  [key in Building]: BuildingFormulas;
};

export const buildingsFormulas: Buildings = {
  [Building.METAL_MINE]: metalMineFormulas,
  [Building.CRYSTAL_MINE]: crystalMineFormulas,
  [Building.DEUTERIUM_MINE]: deuteriumSynthetizerFormulas,
};
