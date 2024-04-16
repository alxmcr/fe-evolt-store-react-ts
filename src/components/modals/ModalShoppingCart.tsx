import Icon10x10Close from '../@icons/10x10/Icon10x10Close';
import Icon16x16ArrowForward from '../@icons/16x16/Icon16x16ArrowForward';
import BoxProductsInCart from '../boxes/BoxProductsInCart';

export default function ModalShoppingCart() {
  return (
    <article className="bg-light-50">
      <header>
        <h3 className="font-semibold">Shopping cart</h3>
        <Icon10x10Close />
      </header>
      <BoxProductsInCart />
      <button>
        <span>Checkout</span>
        <Icon16x16ArrowForward />
      </button>
    </article>
  );
}
