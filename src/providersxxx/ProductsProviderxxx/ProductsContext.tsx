import React from 'react';
import { ProductsContextData } from '../../@types/providerTypes';
import { LoadingStates } from '../../@enums/appEnums';

const initialState: ProductsContextData = {
  statusProducts: LoadingStates.IDLE,
  products: [],
  startRangePrice: 0,
  endRangePrice: 0,
};

export const ProductsContext = React.createContext(initialState);
