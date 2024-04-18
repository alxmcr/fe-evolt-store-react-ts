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
  console.log('🚀 ~ brandNames:', brandNames);
  const storageCapacities = getStorageCapacitiesFromFilterCriterias(filterProductsCriterias);
  console.log('🚀 ~ storageCapacities:', storageCapacities);
  const bluetoothVersions = getBluetoothVersionsFromFilterCriterias(filterProductsCriterias);
  console.log('🚀 ~ bluetoothVersions:', bluetoothVersions);

  return products;

  /*
  return products.filter((product) => {
    let match = false;

    const brandConditions = brandNames.includes(product.brand.name);
    const storageConditions = storageCapacities.includes(product.storage.capacity);
    const bluetoothConditions = bluetoothVersions.includes(product.bluetooth.version);

    //console.log(`${product.name}`, { brandConditions, storageConditions, bluetoothConditions });

    if (brandConditions && storageCapacities && bluetoothConditions) {
      //console.log('brandConditions && storageCapacities && bluetoothConditions');
      match = brandConditions && storageConditions && bluetoothConditions;
    } else if (brandConditions && storageCapacities) {
      //console.log('brandConditions && storageCapacities');
      match = brandConditions && storageConditions;
    } else if (brandConditions && bluetoothConditions) {
      //console.log('brandConditions && bluetoothConditions');
      match = brandConditions && bluetoothConditions;
    } else if (storageCapacities && bluetoothConditions) {
      //console.log('storageCapacities && bluetoothConditions');
      match = storageCapacities && bluetoothConditions;
    } else if (brandConditions) {
      match = brandConditions;
    } else if (storageCapacities) {
      //console.log('storageCapacities');
      match = storageConditions;
    } else if (bluetoothConditions) {
      //console.log('bluetoothConditions');
      match = bluetoothConditions;
    }

    return match;
  });
  */
};
