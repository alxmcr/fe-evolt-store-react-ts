import { ProductInCart } from '../../@types/shoppingCartTypes';
import Icon16x16Plus from '../@icons/16x16/Icon16x16Plus';
import BoxProductImageCover from '../boxes/BoxProductImageCover';

type Props = {
  productInCart: ProductInCart;
};

export default function CardProductInCart({ productInCart }: Props) {
  return (
    <article className="flex items-center justify-between gap-2 p-[.625rem] shadow-light-950">
      <BoxProductImageCover
        photoFilename={productInCart.photoFilename}
        photoAlt={productInCart.photoAlt}
        photoSource={productInCart.photoSource}
      />
      <div className="flex h-[7.5rem] w-[17.5rem] flex-col gap-2">
        <h3 className="font-black">{productInCart.name}</h3>
        <div className="flex items-center gap-4">
          <button className="flex items-center">
            <Icon16x16Plus />
          </button>
          <span className="font-semibold">{productInCart.quantity}</span>
          <button className="flex items-center">
            <Icon16x16Plus />
          </button>
        </div>
        <p className="font-semibold">
          {productInCart.priceCurrency} {productInCart.priceValue * productInCart.quantity}
        </p>
      </div>
    </article>
  );
}
