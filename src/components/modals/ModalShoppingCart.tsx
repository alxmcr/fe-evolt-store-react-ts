import Icon18x18ArrowForward from '../@icons/18x18/Icon18x18ArrowForward';
import Icon18x18Close from '../@icons/18x18/Icon18x18Close';
import BoxProductsInCart from '../boxes/BoxProductsInCart';

export default function ModalShoppingCart() {
  return (
    <article className="flex w-[18.75rem] flex-col gap-10 bg-light-50 px-[8px] py-[12px]">
      <header className="flex items-center justify-between">
        <h3 className="font-semibold">Shopping cart</h3>
        <Icon18x18Close />
      </header>
      <BoxProductsInCart />
      <button className="flex h-[2.625rem] items-center justify-center gap-4 rounded-lg bg-perano-300">
        <span>Checkout</span>
        <Icon18x18ArrowForward />
      </button>
    </article>
  );
}
