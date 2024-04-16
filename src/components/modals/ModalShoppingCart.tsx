import Icon10x10Close from '../@icons/10x10/Icon10x10Close';
import Icon16x16ArrowForward from '../@icons/16x16/Icon16x16ArrowForward';
import BoxProductsInCart from '../boxes/BoxProductsInCart';

export default function ModalShoppingCart() {
  return (
    <article className="flex flex-col gap-2 bg-light-50 px-[8px] py-[12px]">
      <header className="flex items-center justify-between">
        <h3 className="font-semibold">Shopping cart</h3>
        <Icon10x10Close />
      </header>
      <BoxProductsInCart />
      <button className="flex h-[2.625rem] items-center justify-center gap-4 rounded-lg bg-perano-300">
        <span>Checkout</span>
        <Icon16x16ArrowForward />
      </button>
    </article>
  );
}
