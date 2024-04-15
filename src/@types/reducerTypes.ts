import { FilterBluetoothData, FilterBrandData, TagFilterProduct, FilterStorageData } from "./filterTypes";

type UpdateMinPriceAction = {
  type: 'update_min_price';
  payload: {
    min: number;
  };
};

type UpdateMaxPriceAction = {
  type: 'update_max_price';
  payload: {
    max: number;
  };
};

type CheckedBrandAction = {
  type: 'checked_brand';
  payload: {
    id: string;
    checked: boolean;
  };
};

type CheckedStorageAction = {
  type: 'checked_storage';
  payload: {
    id: string;
    checked: boolean;
  };
};

type CheckedBluetoothAction = {
  type: 'checked_bluetooth';
  payload: {
    id: string;
    checked: boolean;
  };
};

type AddBrandAction = {
  type: 'add_brand';
  payload: FilterBrandData;
};

type AddStorageAction = {
  type: 'add_storage';
  payload: FilterStorageData;
};

type AddBluetoothAction = {
  type: 'add_bluetooth';
  payload: FilterBluetoothData;
};

export type FilterAction =
  | AddBrandAction
  | AddStorageAction
  | AddBluetoothAction
  | UpdateMinPriceAction
  | UpdateMaxPriceAction
  | CheckedBrandAction
  | CheckedStorageAction
  | CheckedBluetoothAction;

export type FilterProductsCriterias = {
  minPrice: number;
  maxPrice: number;
  brands: FilterBrandData[];
  storages: FilterStorageData[];
  bluetooths: FilterBluetoothData[];
};

export type FilterProductsTags = {
  tags: TagFilterProduct[];
};

export type ProductsLimitsPrice = {
  startPrice: number;
  endPrice: number;
};
