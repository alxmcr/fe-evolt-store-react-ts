import React from 'react';
import { ProductInCart } from '../../@types/shoppingCartTypes';
import { formatPriceWithDecimals } from '../../helpers/helpers-format';
import Icon16x16Add from '../@icons/16x16/Icon16x16Add';
import Icon16x16Close from '../@icons/16x16/Icon16x16Close';
import Icon16x16Remove from '../@icons/16x16/Icon16x16Remove';
import BoxProductImageCover from '../boxes/boxes-images/BoxProductImageCover';
import { ShoppingCartDispatchContext } from '../../@providers/ShoppingCartProvider/ShoppingCardContext';

type Props = {
  productInCart: ProductInCart;
};

export default function CardProductInCart({ productInCart }: Props) {
  const dispatch = React.useContext(ShoppingCartDispatchContext);

  const handleIncreaseQuantity = (productToIncrease: ProductInCart) => {
    dispatch({
      type: 'increase_quantity_one_by_one_product_in_cart',
      payload: {
        productId: productToIncrease.id,
      },
    });
  };

  const handleDecreaseQuantity = (productToDecrease: ProductInCart) => {
    dispatch({
      type: 'decrease_quantity_one_by_one_product_in_cart',
      payload: {
        productId: productToDecrease.id,
      },
    });
  };

  const handleRemoveProductFromCart = (productToRemove: ProductInCart) => {
    dispatch({
      type: 'remove_product_from_cart',
      payload: {
        productId: productToRemove.id,
      },
    });
  };

  return (
    <article className="flex h-[120px] gap-[8px] border border-perano-600 bg-white p-[10px] md:h-[140px] md:w-[314px] lg:h-[154px] lg:w-[370px]">
      <BoxProductImageCover photoFilename={productInCart.photoFilename} photoAlt={productInCart.photoAlt} />
      <div className="flex w-[152px] flex-col justify-between gap-2 md:w-[166px] lg:w-[208px]">
        <h3 className="truncate font-black">{productInCart.name}</h3>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <button
              className="flex size-[24px] items-center justify-center bg-perano-500 text-white md:size-[28px] lg:size-[32px]"
              onClick={() => handleDecreaseQuantity(productInCart)}
            >
              <Icon16x16Remove />
            </button>
            <span className="font-semibold">{productInCart.quantity}</span>
            <button
              className="flex size-[24px] items-center justify-center bg-perano-500 text-white md:size-[28px] lg:size-[32px]"
              onClick={() => handleIncreaseQuantity(productInCart)}
            >
              <Icon16x16Add />
            </button>
          </div>
          <button
            className="flex size-[24px] items-center justify-center bg-pink-500 text-white md:size-[28px] lg:size-[32px]"
            onClick={() => handleRemoveProductFromCart(productInCart)}
          >
            <Icon16x16Close />
          </button>
        </div>
        <p className="font-semibold">
          {`${productInCart.priceCurrency} ${formatPriceWithDecimals(productInCart.priceValue * productInCart.quantity)}`}
        </p>
      </div>
    </article>
  );
}
