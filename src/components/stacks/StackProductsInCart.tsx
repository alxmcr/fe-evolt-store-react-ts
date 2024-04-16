import { ProductInCart } from '../../@types/shoppingCartTypes';
import CardProductInCart from '../cards/CardProductInCart';

type Props = {
  productsInCart: ProductInCart[];
};

export default function StackProductsInCart({ productsInCart = [] }: Props) {
  if (productsInCart.length === 0) {
    return (
      <div>
        <h3>No product in cart.</h3>
        <button>Continue shopping...</button>
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
