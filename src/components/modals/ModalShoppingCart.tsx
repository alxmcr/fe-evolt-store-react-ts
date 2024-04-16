import Icon16x16ArrowRight from '../@icons/16x16/Icon16x16ArrowRight';

export default function ModalShoppingCart() {
  return (
    <article>
      <header>
        <h3>Shopping cart</h3>
      </header>
      <div>
        <div></div>
        <div>
          <h4>Total</h4>
          <span>MXN 5999.97</span>
        </div>
      </div>
      <button>
        <span>Checkout</span>
        <Icon16x16ArrowRight />
      </button>
    </article>
  );
}
