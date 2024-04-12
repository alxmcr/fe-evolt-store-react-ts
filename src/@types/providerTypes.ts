import { BluetoothData, BrandData, ProductData, StorageData } from './appTypes';
import { TagFilter } from './filterTypes';

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
  brandsSelected: TagFilter[];
  bluetoothsSelected: TagFilter[];
  storagesSelected: TagFilter[];
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
  setBrandsSelected: React.Dispatch<React.SetStateAction<TagFilter[]>>;
  setBluetoothsSelected: React.Dispatch<React.SetStateAction<TagFilter[]>>;
  setStoragesSelected: React.Dispatch<React.SetStateAction<TagFilter[]>>;
};
