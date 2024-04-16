import { ProductInCart } from '../../@types/shoppingCartTypes';
import Icon200x200Cart from '../@icons/200x200/Icon200x200Cart';
import CardProductInCart from '../cards/CardProductInCart';

type Props = {
  productsInCart: ProductInCart[];
};

export default function StackProductsInCart({ productsInCart = [] }: Props) {
  if (productsInCart.length === 0) {
    return (
      <div>
        <Icon200x200Cart />
        <p>Your shopping list is empty.</p>
      </div>
    );
  }

  return (
    <div className="flex h-[19.375rem] flex-col gap-5 overflow-auto">
      {productsInCart.map((productInCart) => (
        <CardProductInCart key={productInCart.id} productInCart={productInCart} />
      ))}
    </div>
  );
}
