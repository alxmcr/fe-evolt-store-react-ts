import React from 'react';
import Icon30x30Cart from '../../@icons/30x30/Icon30x30Cart';
import Icon30x30Heart from '../../@icons/30x30/Icon30x30Heart';
import AppBadgeIcon from '../../badges/AppBadgeIcon';
import { ShoppingCartContext } from '../../../@providers/ShoppingCartProvider/ShoppingCardContext';

export default function AppHeaderActions() {
  const shoppingCart = React.useContext(ShoppingCartContext);

  const handleFavorites = () => {
    console.log('Display favorites');
  };

  const handleCart = () => {
    console.log('Display cart');
  };

  return (
    <div className="flex items-center gap-2">
      <button className="flex size-[40px] items-center" onClick={handleFavorites}>
        <AppBadgeIcon smallText="0">
          <Icon30x30Heart />
        </AppBadgeIcon>
      </button>
      <button className="flex size-[40px] items-center" onClick={handleCart}>
        <AppBadgeIcon smallText={String(shoppingCart.productsInCart.length)}>
          <Icon30x30Cart />
        </AppBadgeIcon>
      </button>
    </div>
  );
}
