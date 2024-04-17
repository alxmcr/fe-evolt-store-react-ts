import { ProductInCart } from '../../@types/shoppingCartTypes';
import CardProductInCart from '../cards/CardProductInCart';

type Props = {
  productsInCart: ProductInCart[];
};

export default function StackProductsInCart({ productsInCart = [] }: Props) {
  return (
    <div className="flex h-[310px] w-full flex-col gap-5 overflow-auto px-[8px] pb-[16px]">
      {productsInCart.map((productInCart) => (
        <CardProductInCart key={productInCart.id} productInCart={productInCart} />
      ))}
    </div>
  );
}
