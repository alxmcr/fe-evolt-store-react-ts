import { FilterBluetoothData, FilterBrandData, TagFilterProduct, FilterStorageData } from './filterTypes';
import { ProductInCart } from './shoppingCartTypes';

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

type ResetFilterCriterias = {
  type: 'reset_filter_criterias';
};

export type FilterCriteriasAction =
  | AddBrandAction
  | AddStorageAction
  | AddBluetoothAction
  | UpdateMinPriceAction
  | UpdateMaxPriceAction
  | CheckedBrandAction
  | CheckedStorageAction
  | CheckedBluetoothAction
  | ResetFilterCriterias;

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

export type ShoppingCart = {
  productsInCart: ProductInCart[];
};

type AddProductToCartAction = {
  type: 'add_product_to_cart';
  payload: ProductInCart;
};

type RemoveProductFromCartAction = {
  type: 'remove_product_from_cart';
  payload: {
    productId: string;
  };
};

type UpdateProductToCartAction = {
  type: 'update_product_to_cart';
  payload: ProductInCart;
};

type IncreaseQuantityOneByOneProductInCartAction = {
  type: 'increase_quantity_one_by_one_product_in_cart';
  payload: {
    productId: string;
  };
};

type DecreaseQuantityOneByOneProductInCartAction = {
  type: 'decrease_quantity_one_by_one_product_in_cart';
  payload: {
    productId: string;
  };
};

export type ProductToCartAction =
  | AddProductToCartAction
  | RemoveProductFromCartAction
  | UpdateProductToCartAction
  | IncreaseQuantityOneByOneProductInCartAction
  | DecreaseQuantityOneByOneProductInCartAction;
