import React from 'react';
import { ShoppingCartContext } from '../../@providers/ShoppingCartProvider/ShoppingCardContext';
import StackProductsInCart from '../stacks/StackProductsInCart';

export default function BoxProductsInCart() {
  const shoppingCart = React.useContext(ShoppingCartContext);

  return (
    <div className="flex flex-col gap-6">
      <StackProductsInCart productsInCart={shoppingCart.productsInCart} />
    </div>
  );
}
