import { ProductInCart } from '../@types/shoppingCartTypes';

export const calculateTotalToPayOnCart = (productInCart: ProductInCart[] = []) => {
  if (productInCart.length === 0) return 0;

  return productInCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.priceValue * currentProduct.quantity;
  }, 0);
};
