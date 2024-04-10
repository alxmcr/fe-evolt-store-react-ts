import { MOCK_BLUETOOTHS } from '../../mocks/mock-laptops-bluetooth';
import { MOCK_BRANDS } from '../../mocks/mock-laptops-brands';
import { MOCK_STORAGES } from '../../mocks/mock-laptops-storages';
import BoxFormFilterByRangePrices from '../boxes/BoxFormFilterByRangePrices';
import CardAsideBase from '../cards/CardAsideBase';
import FormFilterByBluetooths from '../forms/FormFilterByBluetooths';
import FormFilterByBrands from '../forms/FormFilterByBrands';
import FormFilterByStorages from '../forms/FormFilterByStorage';

export default function AsideProductsFilter() {
  return (
    <aside className="hidden rounded-xl bg-white p-4 lg:sticky lg:flex lg:h-[810px] lg:w-2/6 lg:flex-col lg:gap-4">
      <CardAsideBase title="Pricing">
        <BoxFormFilterByRangePrices />
      </CardAsideBase>
      <CardAsideBase title="Brands">
        <FormFilterByBrands brands={MOCK_BRANDS} />
      </CardAsideBase>
      <CardAsideBase title="Storage">
        <FormFilterByStorages storages={MOCK_STORAGES} />
      </CardAsideBase>
      <CardAsideBase title="Bluetooth">
        <FormFilterByBluetooths bluetooths={MOCK_BLUETOOTHS} />
      </CardAsideBase>
    </aside>
  );
}
