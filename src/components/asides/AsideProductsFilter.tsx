import BoxFormFilterByRangePrices from '../boxes/BoxFormFilterByRangePrices';
import CardAsideBase from '../cards/CardAsideBase';

export default function AsideProductsFilter() {
  return (
    <aside className="hidden rounded-xl bg-white p-4 lg:flex lg:w-2/6 lg:flex-col lg:gap-4">
      <CardAsideBase title="Pricing">
        <BoxFormFilterByRangePrices />
      </CardAsideBase>

      <CardAsideBase title="Brands"></CardAsideBase>
      <CardAsideBase title="Storage"></CardAsideBase>
      <CardAsideBase title="Bluetooth"></CardAsideBase>
    </aside>
  );
}
