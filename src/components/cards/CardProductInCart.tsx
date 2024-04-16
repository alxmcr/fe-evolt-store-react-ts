import { ProductInCart } from '../../@types/shoppingCartTypes';
import Icon16x16Plus from '../@icons/16x16/Icon16x16Plus';
import BoxProductImageCover from '../boxes/BoxProductImageCover';

type Props = {
  productInCart: ProductInCart;
};

export default function CardProductInCart({ productInCart }: Props) {
  return (
    <article className="shadow-light-950">
      <BoxProductImageCover
        photoFilename={productInCart.photoFilename}
        photoAlt={productInCart.photoAlt}
        photoSource={productInCart.photoSource}
      />
      <div>
        <h3>{productInCart.name}</h3>
        <div className="flex items-center">
          <button className="flex items-center">
            <Icon16x16Plus />
          </button>
          <span>{productInCart.quantity}</span>
          <button className="flex items-center">
            <Icon16x16Plus />
          </button>
        </div>
        <p>
          {productInCart.priceCurrency} {productInCart.priceValue * productInCart.quantity}
        </p>
      </div>
    </article>
  );
}
