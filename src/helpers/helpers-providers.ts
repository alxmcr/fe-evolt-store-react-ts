import { ProductData } from '../@types/appTypes';
import { RangePriceProducts } from '../@types/providerTypes';
import { FilterAction, FilterProductsCriterias } from '../@types/reducerTypes';
import {
  findAllFilterBluetooths,
  findAllFilterBrands,
  findAllFilterStorages,
} from './helpers-products-filter';

export const initializationFilterProductsCriterias = (
  products: ProductData[],
  rangePrices: RangePriceProducts,
  filterCriterias: FilterProductsCriterias,
  dispatch: React.Dispatch<FilterAction>,
) => {
  if (filterCriterias.brands.length === 0) {
    // Filter criterias
    const brandsForFilter = findAllFilterBrands(products);
    const storagesForFilter = findAllFilterStorages(products);
    const bluetoothsForFilter = findAllFilterBluetooths(products);
    // -- Dispatch actions
    dispatch({
      type: 'update_min_price',
      payload: {
        min: rangePrices.minPriceAllowed,
      },
    });
    dispatch({
      type: 'update_max_price',
      payload: {
        max: rangePrices.maxPriceAllowed,
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
};
