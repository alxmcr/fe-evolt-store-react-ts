import React from 'react';
import { ShoppingCartContext } from '../../@providers/ShoppingCartProvider/ShoppingCardContext';
import Icon18x18Close from '../@icons/18x18/Icon18x18Close';
import BoxProductsInCart from '../boxes/BoxProductsInCart';
import {
  CartDialogActionsContext,
  CartDialogRefContext,
} from '../../@providers/CartDialogProvider/CartDialogContext';

export default function ModalShoppingCart() {
  const shoppingCart = React.useContext(ShoppingCartContext);
  const dialogRef = React.useContext(CartDialogRefContext);
  const { closeDialog } = React.useContext(CartDialogActionsContext);

  return (
    <dialog
      ref={dialogRef}
      className="flex w-[304px] flex-col gap-6 bg-light-50 backdrop:bg-black/50 md:w-[336px] lg:w-[392px]"
    >
      <div className="flex flex-col gap-6 ">
        <header className="flex items-center justify-between border border-b-perano-400 p-[12px]">
          <h3 className="text-[18px] font-bold uppercase tracking-widest text-perano-600 md:text-[26px] lg:text-[28px]">
            Shopping cart
          </h3>
          <button onClick={closeDialog}>
            <Icon18x18Close />
          </button>
        </header>
        <BoxProductsInCart productsInCart={shoppingCart.productsInCart} />
      </div>
    </dialog>
  );
}
