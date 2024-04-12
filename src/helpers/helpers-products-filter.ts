import { ProductData } from '../@types/appTypes';
import { FilterBrandData, FilterStorageData } from '../@types/filterTypes';

export const findAllFilterBrands = (products: ProductData[] = []) => {
  const brandsSet: Set<FilterBrandData> = new Set(
    products.map((product) => {
      return { ...product.brand, checked: false };
    }),
  );

  return Array.from(brandsSet);
};

export const findAllFilterStorages = (products: ProductData[] = []) => {
  const storagesSet: Set<FilterStorageData> = new Set(
    products.map((product) => {
      return { ...product.storage, checked: false };
    }),
  );

  return Array.from(storagesSet);
};

export const findAllFilterBluetooths = (products: ProductData[] = []) => {
  const bluetoothsSet = new Set(
    products.map((product) => {
        return {product.bluetooth}
    }),
  );

  return Array.from(bluetoothsSet);
};
