import { ProductData } from '../@types/appTypes';
import {
    FilterBluetoothData,
    FilterBrandData,
    FilterStorageData,
} from '../@types/filterTypes';

export const findAllFilterBrands = (products: ProductData[] = []) => {
  const brandsFilterSet: Set<FilterBrandData> = new Set(
    products.map((product, index) => {
      return { ...product.brand, id: `filter-brand-${index}`, checked: false };
    }),
  );

  return Array.from(brandsFilterSet);
};

export const findAllFilterStorages = (products: ProductData[] = []) => {
  const storagesFilterSet: Set<FilterStorageData> = new Set(
    products.map((product, index) => {
      return {
        ...product.storage,
        id: `filter-storage-${index}`,
        checked: false,
      };
    }),
  );

  return Array.from(storagesFilterSet);
};

export const findAllFilterBluetooths = (products: ProductData[] = []) => {
  const bluetoothsFilterSet: Set<FilterBluetoothData> = new Set(
    products.map((product, index) => {
      return {
        ...product.bluetooth,
        id: `filter-bluetooth-${index}`,
        checked: false,
      };
    }),
  );

  return Array.from(bluetoothsFilterSet);
};
