import { MOCK_BRANDS } from '../../mocks/mock-brands-products';
import { MOCK_STORAGES } from '../../mocks/mock-computers-storages';
import BoxFormFilterByRangePrices from '../boxes/BoxFormFilterByRangePrices';
import CardAsideBase from '../cards/CardAsideBase';
import FormFilterByBrands from '../forms/FormFilterByBrands';
import FormFilterByStorages from '../forms/FormFilterByStorage';

export default function AsideProductsFilter() {
  return (
    <aside className="hidden rounded-xl bg-white p-4 lg:flex lg:w-2/6 lg:flex-col lg:gap-4">
      <CardAsideBase title="Pricing">
        <BoxFormFilterByRangePrices />
      </CardAsideBase>
      <CardAsideBase title="Brands">
        <FormFilterByBrands brands={MOCK_BRANDS} />
      </CardAsideBase>
      <CardAsideBase title="Storage">
        <FormFilterByStorages storages={MOCK_STORAGES} />
      </CardAsideBase>
      <CardAsideBase title="Bluetooth"></CardAsideBase>
    </aside>
  );
}
