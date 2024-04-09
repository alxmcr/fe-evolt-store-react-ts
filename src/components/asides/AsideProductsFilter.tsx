import CardPriceRangeSlider from '../cards/CardPriceRangeSlider';

export default function AsideProductsFilter() {
  return (
    <aside className="hidden rounded-xl bg-white p-4 lg:flex lg:w-2/6 lg:flex-col lg:gap-4">
      <CardPriceRangeSlider />
      <div>
        <h4 className="font-semibold uppercase tracking-widest text-perano-300">
          Brands
        </h4>
      </div>
      <div>
        <h4 className="font-semibold uppercase tracking-widest text-perano-300">
          Storage
        </h4>
      </div>
      <div>
        <h4 className="font-semibold uppercase tracking-widest text-perano-300">
          Bluetooth
        </h4>
      </div>
    </aside>
  );
}
