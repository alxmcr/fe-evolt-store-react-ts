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
    <div className="flex flex-col gap-3">
      {productsInCart.map((productInCart) => (
        <CardProductInCart key={productInCart.id} productInCart={productInCart} />
      ))}
    </div>
  );
}
