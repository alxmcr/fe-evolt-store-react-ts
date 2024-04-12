import { BluetoothData, BrandData, ProductData, StorageData } from './appTypes';
import { FilterProductTag } from './filterTypes';

export type ProductsContextData = {
  products: ProductData[];
  productsFiltered: ProductData[];
  minPrice: number;
  maxPrice: number;
  brands: BrandData[];
  storages: StorageData[];
  bluetooths: BluetoothData[];
};

export type ProductFilterCriteriasContextData = {
  minValueInput: number;
  maxValueInput: number;
  minPrice: number;
  maxPrice: number;
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
  tagsFilter: FilterProductTag[];
  setTagsFilter: React.Dispatch<React.SetStateAction<FilterProductTag[]>>;
};
