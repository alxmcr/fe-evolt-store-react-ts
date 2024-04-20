import { ProductData } from '../@types/appTypes';
import { TagFilterProduct } from '../@types/filterTypes';
import { FilterCriteriasAction, FilterProductsCriterias } from '../@types/reducerTypes';

export const uncheckedByCategory = (
  tagToRemove: TagFilterProduct,
  dispatch: React.Dispatch<FilterCriteriasAction>,
) => {
  const { category, valueId } = tagToRemove;

  switch (category) {
    case 'brand':
      dispatch({
        type: 'checked_brand',
        payload: {
          id: valueId,
          checked: false,
        },
      });
      break;
    case 'storage':
      dispatch({
        type: 'checked_storage',
        payload: {
          id: valueId,
          checked: false,
        },
      });
      break;

    case 'bluetooth':
      dispatch({
        type: 'checked_bluetooth',
        payload: {
          id: valueId,
          checked: false,
        },
      });
      break;

    default:
      throw Error('Unknown tag category');
  }
};

export const resetRangePriceFilter = (dispatch: React.Dispatch<FilterCriteriasAction>) => {
  dispatch({
    type: 'update_min_price',
    payload: {
      min: 0,
    },
  });

  dispatch({
    type: 'update_max_price',
    payload: {
      max: 0,
    },
  });
};

export const filterByBrands = (products: ProductData[] = [], brands: string[]) => {
  return products.filter((product) => brands.includes(product.brand.name));
};

export const getBrandNamesFromFilterCriterias = (filterProductsCriterias: FilterProductsCriterias) => {
  if (filterProductsCriterias === null || filterProductsCriterias === undefined) {
    return [];
  }

  if (filterProductsCriterias.brands === null || filterProductsCriterias.brands === undefined) {
    return [];
  }

  if (filterProductsCriterias.brands.length === 0) {
    return [];
  }

  const brandNamesChecked = [];

  for (const brand of filterProductsCriterias.brands) {
    if (brand.checked) {
      brandNamesChecked.push(brand.name);
    }
  }

  return brandNamesChecked;
};

export const getStorageCapacitiesFromFilterCriterias = (filterProductsCriterias: FilterProductsCriterias) => {
  if (filterProductsCriterias === null || filterProductsCriterias === undefined) {
    return [];
  }

  if (filterProductsCriterias.storages === null || filterProductsCriterias.storages === undefined) {
    return [];
  }

  if (filterProductsCriterias.storages.length === 0) {
    return [];
  }

  const storageCapacitiesChecked = [];

  for (const storage of filterProductsCriterias.storages) {
    if (storage.checked) {
      storageCapacitiesChecked.push(storage.capacity);
    }
  }

  return storageCapacitiesChecked;
};

export const getBluetoothVersionsFromFilterCriterias = (filterProductsCriterias: FilterProductsCriterias) => {
  if (filterProductsCriterias === null || filterProductsCriterias === undefined) {
    return [];
  }

  if (filterProductsCriterias.bluetooths === null || filterProductsCriterias.bluetooths === undefined) {
    return [];
  }

  if (filterProductsCriterias.bluetooths.length === 0) {
    return [];
  }

  const bluetoothVersionsChecked = [];

  for (const bluetooth of filterProductsCriterias.bluetooths) {
    if (bluetooth.checked) {
      bluetoothVersionsChecked.push(bluetooth.version);
    }
  }

  return bluetoothVersionsChecked;
};

export const applyFilterCriterias = (
  products: ProductData[] = [],
  filterProductsCriterias: FilterProductsCriterias,
) => {
  if (products.length === 0) {
    return products;
  }

  if (filterProductsCriterias === null || filterProductsCriterias === undefined) {
    return products;
  }

  // Get values to filter
  const { minPrice, maxPrice } = filterProductsCriterias;
  console.log('🚀 ~ minPrice:', minPrice);
  console.log('🚀 ~ maxPrice:', maxPrice);
  const brandNames = getBrandNamesFromFilterCriterias(filterProductsCriterias);
  const storagesCapacity = getStorageCapacitiesFromFilterCriterias(filterProductsCriterias);
  const bluetoothVersions = getBluetoothVersionsFromFilterCriterias(filterProductsCriterias);

  return products.filter((product) => {
    let matchRangePrice = true;

    if (minPrice > 0 && maxPrice > 0) {
      matchRangePrice = product.priceValue >= minPrice && product.priceValue <= maxPrice;
    }

    const matchBrands = brandNames.length > 0 ? brandNames.includes(product.brand.name) : true;
    const matchStorages =
      storagesCapacity.length > 0 ? storagesCapacity.includes(product.storage.capacity) : true;
    const matchBluetooths =
      bluetoothVersions.length > 0 ? bluetoothVersions.includes(product.bluetooth.version) : true;

    return matchRangePrice && matchBrands && matchStorages && matchBluetooths;
  });
};
