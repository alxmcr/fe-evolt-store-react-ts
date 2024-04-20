import React from 'react';
import { ProductToCartAction, ShoppingCart } from '../../@types/reducerTypes';
import { initialShoppingCart } from '../../helpers/constants-providers';

export const ShoppingCartContext = React.createContext<ShoppingCart>(initialShoppingCart);
export const ShoppingCartDispatchContext = React.createContext<React.Dispatch<ProductToCartAction>>(() => {});
