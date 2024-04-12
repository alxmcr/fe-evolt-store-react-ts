import { ProductData } from '../@types/appTypes';
import {
  FilterBluetoothData,
  FilterBrandData,
  FilterStorageData,
} from '../@types/filterTypes';
import { findAllBluetooths, findAllBrands, findAllStorages } from './helpers-products';

export const findAllFilterBrands = (products: ProductData[] = []) => {
  const brands = findAllBrands(products);

  const brandsFilterSet: Set<FilterBrandData> = new Set(
    brands.map((brand, index) => {
      return { ...brand, id: `filter-brand-${index}`, checked: false };
    }),
  );

  return Array.from(brandsFilterSet);
};

export const findAllFilterStorages = (products: ProductData[] = []) => {
  const storages = findAllStorages(products);

  const storagesFilterSet: Set<FilterStorageData> = new Set(
    storages.map((storage, index) => {
      return {
        ...storage,
        id: `filter-storage-${index}`,
        checked: false,
      };
    }),
  );

  return Array.from(storagesFilterSet);
};

export const findAllFilterBluetooths = (products: ProductData[] = []) => {
  const bluetooths = findAllBluetooths(products);

  const bluetoothsFilterSet: Set<FilterBluetoothData> = new Set(
    bluetooths.map((bluetooth, index) => {
      return {
        ...bluetooth,
        id: `filter-bluetooth-${index}`,
        checked: false,
      };
    }),
  );

  return Array.from(bluetoothsFilterSet);
};
