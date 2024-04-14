import React from 'react';
import { ProductData } from '../../@types/appTypes';
import { initialLimitsPrice } from '../../helpers/constants-providers';

export const ProductsContext = React.createContext<ProductData[]>([]);
export const ProductsLimitsPriceContext =
  React.createContext(initialLimitsPrice);
