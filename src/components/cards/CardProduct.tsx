import Icon15x15Plus from '../@icons/15x15/Icon15x15Plus';
import BoxProductImage from '../boxes/BoxProductImage';

export default function CardProduct() {
  return (
    <article className="rounded-[1rem] bg-white">
      <header className="px-[.375rem] py-[.625rem]">
        <h3 className="text-[.625rem] uppercase text-perano-200">Computers</h3>
        <h2 className="text-[1rem] font-bold">Asus Laptop VO1560</h2>
      </header>
      <BoxProductImage />
      <footer className="px-[.375rem] py-[.625rem]">
        <p className="text-[.9375rem]">MXN 1599.99</p>
        <button className="flex items-center justify-center">
          <span className="uppercase">Add to cart</span>
          <Icon15x15Plus />
        </button>
      </footer>
    </article>
  );
}
