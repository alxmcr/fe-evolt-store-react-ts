import React from 'react';
import { ProductsContextData } from '../../@types/providerTypes';

const initialState: ProductsContextData = {
  products: [],
};

export const ProductsContext = React.createContext(initialState);
