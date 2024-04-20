import { ProductInCart } from '../../@types/shoppingCartTypes';
import CardProductInCart from '../cards/CardProductInCart';

type Props = {
  productsInCart: ProductInCart[];
};

export default function StackProductsInCart({ productsInCart = [] }: Props) {
  return (
    <div className="scrollbar-app flex h-[378px] w-full flex-col gap-[10px] overflow-y-auto px-[8px] pb-[16px] md:h-[456px] lg:h-[568px]">
      {productsInCart.map((productInCart) => (
        <CardProductInCart key={productInCart.id} productInCart={productInCart} />
      ))}
    </div>
  );
}
