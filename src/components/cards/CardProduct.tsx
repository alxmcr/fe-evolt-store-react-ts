import React from 'react';
import {
  ShoppingCartContext,
  ShoppingCartDispatchContext,
} from '../../@providers/ShoppingCartProvider/ShoppingCardContext';
import { ProductData } from '../../@types/appTypes';
import { findProductInCartById } from '../../helpers/helpers-reducers';
import Icon16X16Cart from '../@icons/16x16/Icon16x16Cart';
import BoxProductImage from '../boxes/boxes-images/BoxProductImage';

type Props = {
  product: ProductData;
};

export default function CardProduct({ product }: Props) {
  const [addedToCart, setAddedToCart] = React.useState(false);
  const shoppingCart = React.useContext(ShoppingCartContext);
  const dispatch = React.useContext(ShoppingCartDispatchContext);

  const handleAddProductToCart = (product: ProductData, quantity = 1) => {
    const productInCart = findProductInCartById(shoppingCart.productsInCart, product?.id);

    if (productInCart === null) {
      // Add new product to cart
      dispatch({
        type: 'add_product_to_cart',
        payload: {
          ...product,
          quantity,
        },
      });
    } else {
      // Update cart
      dispatch({
        type: 'update_product_to_cart',
        payload: {
          ...product,
          quantity: productInCart?.quantity + 1,
        },
      });
    }

    setAddedToCart(true);
  };

  const handleRemoveProductFromCart = (productToRemove: ProductData) => {
    setAddedToCart(false);

    dispatch({
      type: 'remove_product_from_cart',
      payload: {
        productId: productToRemove.id,
      },
    });
  };

  React.useEffect(() => {
    const indexProduct = shoppingCart.productsInCart.findIndex((p) => p.id === product.id);

    if (indexProduct === -1) {
      // Product exists on shopping cart
      setAddedToCart(false);
    }
  }, [shoppingCart.productsInCart, product.id]);

  if (product === null || product === undefined) {
    return null;
  }

  return (
    <article className="rounded-md bg-white">
      <header className="min-h-14 px-[.375rem] py-[.625rem]">
        <h3 className="text-[.625rem] uppercase text-perano-200">{product.category}</h3>
        <h2 className="truncate text-[1rem] font-bold">{product.name}</h2>
      </header>
      <BoxProductImage
        photoFilename={product.photoFilename}
        photoAlt={product.photoAlt}
        photoSource={product.photoSource}
      />
      <footer className="flex flex-col gap-3 px-[.375rem] py-[.625rem]">
        <p className="text-[.9375rem] font-semibold">
          {product.priceCurrency} {product.priceValue}
        </p>

        {addedToCart ? (
          <button
            className="flex min-h-10 items-center justify-center gap-2 rounded-lg border border-[#FF668B] bg-[#FF668B] text-[.875rem] text-white hover:border-light-950 hover:bg-light-950"
            onClick={() => handleRemoveProductFromCart(product)}
          >
            <span className="font-semibold uppercase ">Remove</span>
            <Icon16X16Cart />
          </button>
        ) : (
          <button
            className="bg:text-white flex min-h-10 items-center justify-center gap-2 rounded-lg border border-perano-200 text-[.875rem] hover:border-[#6691FF] hover:bg-[#6691FF] hover:text-light-50"
            onClick={() => handleAddProductToCart(product, 1)}
          >
            <span className="font-semibold uppercase">Add to cart</span>
            <Icon16X16Cart />
          </button>
        )}
      </footer>
    </article>
  );
}
