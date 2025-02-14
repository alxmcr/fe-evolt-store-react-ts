import { ProductData } from '../@types/appTypes';
import { FilterCriteriasAction, FilterProductsCriterias } from '../@types/reducerTypes';
import {
  findAllFilterBluetooths,
  findAllFilterBrands,
  findAllFilterStorages,
} from './helpers-products-filter';

export const initializationFilterProductsCriterias = (
  products: ProductData[],
  filterCriterias: FilterProductsCriterias,
  dispatch: React.Dispatch<FilterCriteriasAction>,
) => {
  if (filterCriterias.brands.length === 0) {
    // Filter criterias
    const brandsForFilter = findAllFilterBrands(products);
    const storagesForFilter = findAllFilterStorages(products);
    const bluetoothsForFilter = findAllFilterBluetooths(products);

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
