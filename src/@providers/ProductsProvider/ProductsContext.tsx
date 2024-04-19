import React from 'react';
import { LoadingStates } from '../../@enums/appEnums';
import { ProductData } from '../../@types/appTypes';

export const ProductsContext = React.createContext<ProductData[]>([]);
export const ProductsLoadingStateContext = React.createContext(LoadingStates.IDLE);
export const ProductCheapestContext = React.createContext<ProductData | null>(null);
export const ProductMostExpensiveContext = React.createContext<ProductData | null>(null);
