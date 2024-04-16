import { ProductInCart } from '../../@types/shoppingCartTypes';
import Icon10x10Plus from '../@icons/10x10/Icon10x10Plus';

type Props = {
  productInCart: ProductInCart;
};

export default function CardProductInCart({ productInCart }: Props) {
  return (
    <article>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h3>{productInCart.name}</h3>
        <div>
          <button>
            <Icon10x10Plus />
          </button>
          <span>{productInCart.quantity}</span>
          <button>
            <Icon10x10Plus />
          </button>
        </div>
        <p>
          {productInCart.priceCurrency} {productInCart.priceValue * productInCart.quantity}
        </p>
      </div>
    </article>
  );
}
