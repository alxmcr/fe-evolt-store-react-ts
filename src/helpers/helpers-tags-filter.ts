import { ProductData } from '../@types/appTypes';
import { TagFilterProduct } from '../@types/filterTypes';
import { FilterAction, FilterProductsCriterias } from '../@types/reducerTypes';

export const uncheckedByCategory = (
  tagToRemove: TagFilterProduct,
  dispatch: React.Dispatch<FilterAction>,
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

export const resetRangePriceFilter = (dispatch: React.Dispatch<FilterAction>) => {
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

  return filterProductsCriterias.brands.map((b) => {
    if (b.checked) {
      return b.name;
    }
    return '';
  });
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

  return filterProductsCriterias.storages.map((b) => {
    if (b.checked) {
      return b.capacity;
    }
    return '';
  });
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

  return filterProductsCriterias.bluetooths.map((b) => {
    if (b.checked) {
      return b.version;
    }
    return '';
  });
};

export const filterProductsByFilterCriterias = (
  products: ProductData[] = [],
  filterProductsCriterias: FilterProductsCriterias,
) => {
  if (products.length === 0) {
    return products;
  }

  if (filterProductsCriterias === null || filterProductsCriterias === undefined) {
    return products;
  }

  // Get data
  const brandNames = getBrandNamesFromFilterCriterias(filterProductsCriterias);
  const storageCapacities = getStorageCapacitiesFromFilterCriterias(filterProductsCriterias);
  const bluetoothVersions = getBluetoothVersionsFromFilterCriterias(filterProductsCriterias);

  return products.filter((product) => {
    const brandConditions = brandNames.includes(product.brand.name);
    const storageConditions = storageCapacities.includes(product.storage.capacity);
    const bluetoothConditions = bluetoothVersions.includes(product.bluetooth.version);

    return brandConditions && storageConditions && bluetoothConditions;
  });
};
