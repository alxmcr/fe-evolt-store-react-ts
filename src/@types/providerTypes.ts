import { FilterProductTag } from './appTypes';

export type ProductFilterContextData = {
  filterPriceMin: number;
  setFilterPriceMin: React.Dispatch<React.SetStateAction<number>>;
  filterPriceMax: number;
  setFilterPriceMax: React.Dispatch<React.SetStateAction<number>>;
  filterBrand: string;
  setFilterBrand: React.Dispatch<React.SetStateAction<string>>;
  filterStorage: string;
  setFilterStorage: React.Dispatch<React.SetStateAction<string>>;
  filterBluetoothVersion: string;
  setFilterBluetoothVersion: React.Dispatch<React.SetStateAction<string>>;
};

export type FilterTagsGroupContextData = {
  filterTags: FilterProductTag[];
  setFilterTags: React.Dispatch<React.SetStateAction<FilterProductTag[]>>;
};
