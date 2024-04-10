import BoxFormFilterByRangePrices from '../boxes/BoxFormFilterByRangePrices';

export default function CardPriceRangeSlider() {
  return (
    <article className="flex flex-col gap-3">
      <header className="flex flex-col gap-1">
        <h4 className="font-bold uppercase tracking-widest text-perano-500">
          Pricing
        </h4>
      </header>
      <BoxFormFilterByRangePrices />
    </article>
  );
}
