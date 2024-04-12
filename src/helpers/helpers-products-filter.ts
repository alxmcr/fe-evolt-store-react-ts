import { ProductData } from '../@types/appTypes';
import {
    FilterBluetoothData,
    FilterBrandData,
    FilterStorageData,
} from '../@types/filterTypes';

export const findAllFilterBrands = (products: ProductData[] = []) => {
  const brandsSet: Set<FilterBrandData> = new Set(
    products.map((product, index) => {
      return { ...product.brand, id: `filter-brand-${index}`, checked: false };
    }),
  );

  return Array.from(brandsSet);
};

export const findAllFilterStorages = (products: ProductData[] = []) => {
  const storagesSet: Set<FilterStorageData> = new Set(
    products.map((product, index) => {
      return {
        ...product.storage,
        id: `filter-storage-${index}`,
        checked: false,
      };
    }),
  );

  return Array.from(storagesSet);
};

export const findAllFilterBluetooths = (products: ProductData[] = []) => {
  const bluetoothsSet: Set<FilterBluetoothData> = new Set(
    products.map((product, index) => {
      return {
        ...product.bluetooth,
        id: `filter-bluetooth-${index}`,
        checked: false,
      };
    }),
  );

  return Array.from(bluetoothsSet);
};
