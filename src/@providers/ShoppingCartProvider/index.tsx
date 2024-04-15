import React from 'react';
import { ShoppingCartContext, ShoppingCartDispatch } from './ShoppingCardContext';
import shoppingCartReducer from '../../@reducers/shoppingCartReducer';
import { initialShoppingCart } from '../../helpers/constants-providers';

type Props = {
  children: React.ReactNode;
};

export default function ShoppingCartProvider({ children }: Props) {
  const [shoppingCart, dispatch] = React.useReducer(shoppingCartReducer, initialShoppingCart);

  return (
    <ShoppingCartContext.Provider value={shoppingCart}>
      <ShoppingCartDispatch.Provider value={dispatch}>{children}</ShoppingCartDispatch.Provider>
    </ShoppingCartContext.Provider>
  );
}
