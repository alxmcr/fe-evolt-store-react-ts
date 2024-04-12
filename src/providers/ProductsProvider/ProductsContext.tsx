import React from 'react';
import { ProductsContextData } from '../../@types/providerTypes';

const initialState: ProductsContextData = {
  products: [],
  productsFiltered: [],
  minPrice: 0,
  maxPrice: 0,
  brands: [],
  bluetooths: [],
  storages: [],
};

export const ProductsContext = React.createContext(initialState);
