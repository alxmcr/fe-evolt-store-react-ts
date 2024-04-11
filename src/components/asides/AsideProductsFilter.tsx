import React from 'react';
import { MOCK_BLUETOOTHS } from '../../mocks/mock-laptops-bluetooth';
import { MOCK_BRANDS } from '../../mocks/mock-laptops-brands';
import { MOCK_STORAGES } from '../../mocks/mock-laptops-storages';
import { ProductFilterCriteriasContext } from '../../providers/ProductFilterCriteriasProvider/ProductFilterCriteriasContext';
import BoxFormFilterByRangePrices from '../boxes/BoxFormFilterByRangePrices';
import CardAsideBase from '../cards/CardAsideBase';
import GroupCheckboxesBluetooths from '../groups-checkboxes/GroupCheckboxesBluetooths';
import GroupCheckboxesBrands from '../groups-checkboxes/GroupCheckboxesBrands';
import GroupCheckboxesStorages from '../groups-checkboxes/GroupCheckboxesStorages';

export default function AsideProductsFilter() {
  const contextProductFilterCriterias = React.useContext(
    ProductFilterCriteriasContext,
  );

  return (
    <aside className="hidden rounded-xl bg-white p-4 lg:sticky lg:flex lg:h-[810px] lg:w-2/6 lg:flex-col lg:gap-4">
      <CardAsideBase title="Pricing">
        <BoxFormFilterByRangePrices
          minValue={contextProductFilterCriterias.minValue}
          maxValue={contextProductFilterCriterias.maxValue}
          minPrice={contextProductFilterCriterias.minPrice}
          maxPrice={contextProductFilterCriterias.maxPrice}
          setMinPrice={contextProductFilterCriterias.setMinPrice}
          setMaxPrice={contextProductFilterCriterias.setMaxPrice}
        />
      </CardAsideBase>
      <CardAsideBase title="Brands">
        <GroupCheckboxesBrands
          brands={MOCK_BRANDS}
          setBrandsSelected={contextProductFilterCriterias.setBrandsSelected}
        />
      </CardAsideBase>
      <CardAsideBase title="Storage">
        <GroupCheckboxesStorages
          storages={MOCK_STORAGES}
          setStoragesSelected={
            contextProductFilterCriterias.setStoragesSelected
          }
        />
      </CardAsideBase>
      <CardAsideBase title="Bluetooth">
        <GroupCheckboxesBluetooths
          bluetooths={MOCK_BLUETOOTHS}
          setBluetoothsSelected={
            contextProductFilterCriterias.setBluetoothsSelected
          }
        />
      </CardAsideBase>
    </aside>
  );
}
