import React from 'react';
import Icon30x30Cart from '../../@icons/30x30/Icon30x30Cart';
import Icon30x30Heart from '../../@icons/30x30/Icon30x30Heart';
import AppBadgeIcon from '../../badges/AppBadgeIcon';
import { ShoppingCartContext } from '../../../@providers/ShoppingCartProvider/ShoppingCardContext';
import { CartDialogActionsContext } from '../../../@providers/CartDialogProvider/CartDialogContext';

export default function AppHeaderActions() {
  const shoppingCart = React.useContext(ShoppingCartContext);
  const { openDialog } = React.useContext(CartDialogActionsContext);

  const handleFavorites = () => {
    console.log('Display favorites');
  };

  return (
    <div className="flex items-center gap-2">
      <button className="flex size-[40px] items-center" onClick={handleFavorites}>
        <AppBadgeIcon smallText="0">
          <Icon30x30Heart />
        </AppBadgeIcon>
      </button>
      <button className="flex size-[40px] items-center" onClick={openDialog}>
        <AppBadgeIcon smallText={String(shoppingCart.productsInCart.length)}>
          <Icon30x30Cart />
        </AppBadgeIcon>
      </button>
    </div>
  );
}
