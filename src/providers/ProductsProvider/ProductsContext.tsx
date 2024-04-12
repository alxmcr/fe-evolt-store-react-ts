import React from 'react';
import { ProductsContextData } from '../../@types/providerTypes';

const initialState: ProductsContextData = {
  products: [],
  productsFiltered: [],
  startRangePrice: 0,
  endRangePrice: 0,
  brands: [],
  bluetooths: [],
  storages: [],
};

export const ProductsContext = React.createContext(initialState);
