import React from 'react';
import { LoadingStates } from '../../@enums/appEnums';
import filterProductsCriteriasReducer from '../../@reducers/filterProductsCriteriasReducer';
import { initialFilterProductsCriterias } from '../../helpers/constants-providers';
import { initializationFilterProductsCriterias } from '../../helpers/helpers-providers';
import { ProductsContext, ProductsLoadingStateContext } from '../ProductsProvider/ProductsContext';
import { FilterCriteriasContext, FilterCriteriasDispatchContext } from './FilterCriteriasContext';

type Props = {
  children: React.ReactNode;
};

export default function FilterCriteriasProvider({ children }: Props) {
  // Get info products
  const products = React.useContext(ProductsContext);
  const loadingStateProducts = React.useContext(ProductsLoadingStateContext);

  const [filterCriterias, dispatch] = React.useReducer(
    filterProductsCriteriasReducer,
    initialFilterProductsCriterias,
  );

  React.useEffect(() => {
    if (LoadingStates.SUCCESS === loadingStateProducts) {
      initializationFilterProductsCriterias(products, filterCriterias, dispatch);
    }
  }, [loadingStateProducts, products, filterCriterias]);

  return (
    <FilterCriteriasContext.Provider value={filterCriterias}>
      <FilterCriteriasDispatchContext.Provider value={dispatch}>
        {children}
      </FilterCriteriasDispatchContext.Provider>
    </FilterCriteriasContext.Provider>
  );
}
