import React from 'react';
import { ProductData } from '../../@types/appTypes';
import { initialLimitsPrice } from '../../helpers/constants-providers';
import { LoadingStates } from '../../@enums/appEnums';

export const ProductsContext = React.createContext<ProductData[]>([]);
export const ProductsLoadingStateContext = React.createContext(LoadingStates.IDLE);
export const ProductCheapestContext = React.createContext<ProductData | null>(null);
export const ProductMostExpensiveContext = React.createContext<ProductData | null>(null);

export const ProductsLimitsPriceContextxxxx = React.createContext(initialLimitsPrice);
