import React from 'react';
import { TagFilter } from '../../@types/filterTypes';
import { MOCK_BLUETOOTHS } from '../../mocks/mock-laptops-bluetooth';
import { MOCK_BRANDS } from '../../mocks/mock-laptops-brands';
import { MOCK_STORAGES } from '../../mocks/mock-laptops-storages';
import BoxFormFilterByRangePrices from '../boxes/BoxFormFilterByRangePrices';
import CardAsideBase from '../cards/CardAsideBase';
import GroupCheckboxesBluetooths from '../groups-checkboxes/GroupCheckboxesBluetooths';
import GroupCheckboxesBrands from '../groups-checkboxes/GroupCheckboxesBrands';
import GroupCheckboxesStorages from '../groups-checkboxes/GroupCheckboxesStorages';

type Props = {
  minPrice: number;
  maxPrice: number;
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
  setBrandsSelected: React.Dispatch<React.SetStateAction<TagFilter[]>>;
  setBluetoothsSelected: React.Dispatch<React.SetStateAction<TagFilter[]>>;
  setStoragesSelected: React.Dispatch<React.SetStateAction<TagFilter[]>>;
};

export default function AsideProductsFilter({
  minPrice = 0,
  maxPrice = 0,
  setMinPrice,
  setMaxPrice,
  setBrandsSelected,
  setBluetoothsSelected,
  setStoragesSelected,
}: Props) {
  return (
    <aside className="hidden rounded-xl bg-white p-4 lg:sticky lg:flex lg:h-[810px] lg:w-2/6 lg:flex-col lg:gap-4">
      <CardAsideBase title="Pricing">
        <BoxFormFilterByRangePrices
          minValue={1}
          maxValue={1100}
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
        />
      </CardAsideBase>
      <CardAsideBase title="Brands">
        <GroupCheckboxesBrands
          brands={MOCK_BRANDS}
          setBrandsSelected={setBrandsSelected}
        />
      </CardAsideBase>
      <CardAsideBase title="Storage">
        <GroupCheckboxesStorages
          storages={MOCK_STORAGES}
          setStoragesSelected={setStoragesSelected}
        />
      </CardAsideBase>
      <CardAsideBase title="Bluetooth">
        <GroupCheckboxesBluetooths
          bluetooths={MOCK_BLUETOOTHS}
          setBluetoothsSelected={setBluetoothsSelected}
        />
      </CardAsideBase>
    </aside>
  );
}
