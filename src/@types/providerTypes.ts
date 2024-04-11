import { ProductData } from './appTypes';
import { TagFilter } from './filterTypes';

export type ProductsContextData = {
  products: ProductData[];
  productsFiltered: ProductData[];
};

export type ProductFilterCriteriasContextData = {
  minValue: number;
  maxValue: number;
  minPrice: number;
  maxPrice: number;
  brandsSelected: TagFilter[];
  bluetoothsSelected: TagFilter[];
  storagesSelected: TagFilter[];
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
  setBrandsSelected: React.Dispatch<React.SetStateAction<TagFilter[]>>;
  setBluetoothsSelected: React.Dispatch<React.SetStateAction<TagFilter[]>>;
  setStoragesSelected: React.Dispatch<React.SetStateAction<TagFilter[]>>;
};
