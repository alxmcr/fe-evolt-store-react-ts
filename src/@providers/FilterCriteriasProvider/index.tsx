import React from 'react';
import { LoadingStates } from '../../@enums/appEnums';
import filterProductsCriteriasReducer from '../../@reducers/filterProductsCriteriasReducer';
import { initialFilterProductsCriterias } from '../../helpers/constants-providers';
import {
  ProductsContext,
  ProductsLoadingStateContext,
} from '../ProductsProvider/ProductsContext';
import {
  FilterCriteriasContext,
  FilterCriteriasDispatchContext,
} from './FilterCriteriasContext';
import {
  findAllFilterBluetooths,
  findAllFilterBrands,
  findAllFilterStorages,
} from '../../helpers/helpers-products-filter';

type Props = {
  children: React.ReactNode;
};

export default function FilterCriteriasProvider({ children }: Props) {
  // Get info products
  const products = React.useContext(ProductsContext);
  const loadingStateProducts = React.useContext(ProductsLoadingStateContext);
  const [initFilterData, setInitFilterData] = React.useState(
    initialFilterProductsCriterias,
  );

  const [filterCriterias, dispatch] = React.useReducer(
    filterProductsCriteriasReducer,
    initFilterData,
  );

  React.useEffect(() => {
    if (LoadingStates.SUCCESS === loadingStateProducts) {
      // Get info filter data
      // Filter criterias
      const filterBrands = findAllFilterBrands(products);
      const filterStorages = findAllFilterStorages(products);
      const filterBluetooths = findAllFilterBluetooths(products);
      // update init filter data
      setInitFilterData((prev) => {
        return {
          ...prev,
          brands: filterBrands,
          storages: filterStorages,
          bluetooths: filterBluetooths,
        };
      });
    }
  }, [loadingStateProducts, products]);

  return (
    <FilterCriteriasContext.Provider value={filterCriterias}>
      <FilterCriteriasDispatchContext.Provider value={dispatch}>
        {children}
      </FilterCriteriasDispatchContext.Provider>
    </FilterCriteriasContext.Provider>
  );
}
