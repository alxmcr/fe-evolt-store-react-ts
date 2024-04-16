import React from 'react';
import { ShoppingCartContext } from '../../@providers/ShoppingCartProvider/ShoppingCardContext';
import StackProductsInCart from '../stacks/StackProductsInCart';

export default function BoxProductsInCart() {
  const shoppingCart = React.useContext(ShoppingCartContext);

  return (
    <div>
      <StackProductsInCart productsInCart={shoppingCart.productsInCart} />
      <div>
        <h4>Total</h4>
        <span className="text-[1.25rem] font-bold">MXN 5999.97</span>
      </div>
    </div>
  );
}
