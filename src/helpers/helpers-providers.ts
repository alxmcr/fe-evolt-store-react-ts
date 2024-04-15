import {
  FilterAction,
  FilterProductsCriterias,
  ProductsLimitsPrice,
} from '../@reducers/filterProductsCriteriasReducer';
import { ProductData } from '../@types/appTypes';
import {
  findAllFilterBluetooths,
  findAllFilterBrands,
  findAllFilterStorages,
} from './helpers-products-filter';

export default function initializationFilterProductsCriterias(
  products: ProductData[],
  limitsPrice: ProductsLimitsPrice,
  filterCriterias: FilterProductsCriterias,
  dispatch: React.Dispatch<FilterAction>,
) {
  if (filterCriterias.brands.length === 0) {
    // Filter criterias
    const brandsForFilter = findAllFilterBrands(products);
    const storagesForFilter = findAllFilterStorages(products);
    const bluetoothsForFilter = findAllFilterBluetooths(products);
    // -- Dispatch actions
    dispatch({
      type: 'update_min_price',
      payload: {
        min: Math.floor(limitsPrice.endPrice / 4),
      },
    });
    dispatch({
      type: 'update_max_price',
      payload: {
        max: Math.floor(limitsPrice.endPrice / 2),
      },
    });
    // add brands
    brandsForFilter.forEach((b) =>
      dispatch({
        type: 'add_brand',
        payload: b,
      }),
    );
    // add storages
    storagesForFilter.forEach((s) =>
      dispatch({
        type: 'add_storage',
        payload: s,
      }),
    );
    // add bluetooths
    bluetoothsForFilter.forEach((bl) =>
      dispatch({
        type: 'add_bluetooth',
        payload: bl,
      }),
    );
  }
}

const isNewTag = (tags: FilterProductTag[] = [], textTag = '') => {
  if (tags.length === 0) return true;

  return tags.findIndex((t) => t.value === textTag) === -1;
};
