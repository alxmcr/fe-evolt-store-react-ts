import React from 'react';
import { ShoppingCartContext } from '../../@providers/ShoppingCartProvider/ShoppingCardContext';
import Icon18x18Close from '../@icons/18x18/Icon18x18Close';
import BoxProductsInCart from '../boxes/BoxProductsInCart';
import { MOCK_PRODUCTS_IN_CART } from '../../mocks/mock-products-in-cart';

export default function ModalShoppingCart() {
  const shoppingCart = React.useContext(ShoppingCartContext);
  console.log(shoppingCart.productsInCart);

  return (
    <article className="flex w-[304px] flex-col gap-6 bg-light-50 md:w-[336px] lg:w-[392px]">
      <header className="flex items-center justify-between border border-b-perano-400 p-[12px]">
        <h3 className="font-semibold">Shopping cart</h3>
        <Icon18x18Close />
      </header>
      <BoxProductsInCart productsInCart={MOCK_PRODUCTS_IN_CART} />
    </article>
  );
}
