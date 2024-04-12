import React from 'react';
import { ProductsContextData } from '../../@types/providerTypes';
import { LoadingStates } from '../../@enums/appEnums';

const initialState: ProductsContextData = {
  statusProducts: LoadingStates.IDLE,
  products: [],
  productsFiltered: [],
  startRangePrice: 0,
  endRangePrice: 0,
  brands: [],
  bluetooths: [],
  storages: [],
};

export const ProductsContext = React.createContext(initialState);
