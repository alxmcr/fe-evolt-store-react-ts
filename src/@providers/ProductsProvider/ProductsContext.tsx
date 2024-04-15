import React from 'react';
import { ProductData } from '../../@types/appTypes';
import { initialLimitsPrice, initialRangePriceProducts } from '../../helpers/constants-providers';
import { LoadingStates } from '../../@enums/appEnums';

export const ProductsContext = React.createContext<ProductData[]>([]);
export const ProductsLoadingStateContext = React.createContext(LoadingStates.IDLE);
export const ProductsLimitsPriceContextxxxx = React.createContext(initialLimitsPrice);
export const RangePriceProductsContext = React.createContext(initialRangePriceProducts);
