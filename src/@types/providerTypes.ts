import { LoadingStates } from '../@enums/appEnums';
import { ProductData } from './appTypes';
import { FilterBluetoothData, FilterBrandData, TagFilterProduct, FilterStorageData } from './filterTypes';

export type ProductsContextData = {
  products: ProductData[];
  statusProducts: LoadingStates;
  startRangePrice: number;
  endRangePrice: number;
};

export type ProductFilterCriteriasContextData = {
  productsFiltered: ProductData[];
  setProductsFiltered: React.Dispatch<React.SetStateAction<ProductData[]>>;
  minValueInput: number;
  maxValueInput: number;
  minPrice: number;
  maxPrice: number;
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
  tagsFilter: TagFilterProduct[];
  setTagsFilter: React.Dispatch<React.SetStateAction<TagFilterProduct[]>>;
  brands: FilterBrandData[];
  storages: FilterStorageData[];
  bluetooths: FilterBluetoothData[];
};

export type CartDialogActions = {
  openDialog: () => void;
  closeDialog: () => void;
};
