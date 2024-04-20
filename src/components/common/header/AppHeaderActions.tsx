import React from 'react';
import { CartDialogActionsContext } from '../../../@providers/CartDialogProvider/CartDialogContext';
import { ShoppingCartContext } from '../../../@providers/ShoppingCartProvider/ShoppingCardContext';
import Icon30x30Cart from '../../@icons/30x30/Icon30x30Cart';
import AppBadgeIcon from '../../badges/AppBadgeIcon';

export default function AppHeaderActions() {
  const shoppingCart = React.useContext(ShoppingCartContext);
  const { openDialog } = React.useContext(CartDialogActionsContext);

  return (
    <div className="flex items-center gap-2">
      <button className="flex size-[40px] items-center" onClick={openDialog}>
        <AppBadgeIcon smallText={String(shoppingCart.productsInCart.length)}>
          <Icon30x30Cart />
        </AppBadgeIcon>
      </button>
    </div>
  );
}
