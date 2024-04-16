import Icon16x16ArrowRight from '../@icons/16x16/Icon16x16ArrowRight';
import BoxProductsInCart from '../boxes/BoxProductsInCart';

export default function ModalShoppingCart() {
  return (
    <article>
      <header>
        <h3>Shopping cart</h3>
      </header>
      <BoxProductsInCart />
      <button>
        <span>Checkout</span>
        <Icon16x16ArrowRight />
      </button>
    </article>
  );
}
