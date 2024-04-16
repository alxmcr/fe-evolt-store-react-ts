import { ProductInCart } from '../../@types/shoppingCartTypes';
import Icon18x18ArrowForward from '../@icons/18x18/Icon18x18ArrowForward';
import Icon200x200Cart from '../@icons/200x200/Icon200x200Cart';
import StackProductsInCart from '../stacks/StackProductsInCart';

type Props = {
  productsInCart: ProductInCart[];
};

export default function BoxProductsInCart({ productsInCart = [] }: Props) {
  if (productsInCart.length === 0) {
    return (
      <div className="flex h-[31.25rem] flex-col items-center justify-center gap-6">
        <Icon200x200Cart />
        <p>Your shopping list is empty.</p>
      </div>
    );
  }

  return (
    <div className="flex h-[31.25rem] flex-col items-center justify-center gap-6">
      <StackProductsInCart productsInCart={productsInCart} />
      <div className="flex items-center justify-between">
        <h4>Total</h4>
        <span className="text-[1.25rem] font-bold">MXN 5999.97</span>
      </div>
      <button className="flex h-[2.625rem] items-center justify-center gap-4 rounded-lg bg-perano-300">
        <span>Checkout</span>
        <Icon18x18ArrowForward />
      </button>
    </div>
  );
}
