import { ProductInCart } from '../../@types/shoppingCartTypes';
import { formatPriceWithDecimals } from '../../helpers/helpers-format';
import { calculateTotalToPayOnCart } from '../../helpers/helpers-products-in-cart';
import Icon18x18ArrowForward from '../@icons/18x18/Icon18x18ArrowForward';
import Icon200x200Cart from '../@icons/200x200/Icon200x200Cart';
import StackProductsInCart from '../stacks/StackProductsInCart';

type Props = {
  productsInCart: ProductInCart[];
};

export default function BoxProductsInCart({ productsInCart = [] }: Props) {
  const totalToPay = calculateTotalToPayOnCart(productsInCart);
  const totalToPayStr = formatPriceWithDecimals(totalToPay);

  const handleGoToCheckout = () => {
    console.log('go to checkout');
  };

  if (productsInCart.length === 0) {
    return (
      <div className="flex h-[31.25rem] flex-col items-center justify-center gap-6">
        <Icon200x200Cart />
        <p>Your shopping list is empty.</p>
      </div>
    );
  }

  return (
    <div className="flex h-[550px] flex-col items-center gap-6">
      <StackProductsInCart productsInCart={productsInCart} />
      <div className="flex h-[100px] w-full flex-col items-center justify-between gap-4 px-[12px]">
        <div className="flex w-full items-center justify-between">
          <h4>Total</h4>
          <span className="text-[1.25rem] font-bold text-perano-600">MXN {totalToPayStr}</span>
        </div>
        <button
          className="flex h-[2.625rem] w-full items-center justify-center gap-4 rounded-lg bg-perano-600 text-light-50"
          onClick={handleGoToCheckout}
        >
          <span>Checkout</span>
          <Icon18x18ArrowForward />
        </button>
      </div>
    </div>
  );
}
