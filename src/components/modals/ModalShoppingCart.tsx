import React from 'react';
import { ShoppingCartContext } from '../../@providers/ShoppingCartProvider/ShoppingCardContext';
import Icon18x18Close from '../@icons/18x18/Icon18x18Close';
import BoxProductsInCart from '../boxes/BoxProductsInCart';

export default function ModalShoppingCart() {
  const shoppingCart = React.useContext(ShoppingCartContext);

  return (
    <article className="flex w-[304px] flex-col gap-10 bg-light-50 p-[12px] md:w-[336px] lg:w-[392px]">
      <header className="flex items-center justify-between">
        <h3 className="font-semibold">Shopping cart</h3>
        <Icon18x18Close />
      </header>
      <BoxProductsInCart productsInCart={shoppingCart.productsInCart} />
    </article>
  );
}
