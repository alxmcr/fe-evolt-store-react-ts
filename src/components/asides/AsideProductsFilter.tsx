import React from 'react';
import { ProductFilterCriteriasContext } from '../../providers/ProductFilterCriteriasProvider/ProductFilterCriteriasContext';
import { ProductsContext } from '../../providers/ProductsProvider/ProductsContext';
import BoxFormFilterByRangePrices from '../boxes/BoxFormFilterByRangePrices';
import CardAsideBase from '../cards/CardAsideBase';
import GroupCheckboxesBluetooths from '../groups-checkboxes/GroupCheckboxesBluetooths';
import GroupCheckboxesBrands from '../groups-checkboxes/GroupCheckboxesBrands';
import GroupCheckboxesStorages from '../groups-checkboxes/GroupCheckboxesStorages';

export default function AsideProductsFilter() {
  const contextProducts = React.useContext(ProductsContext);
  const contextProductFilterCriterias = React.useContext(
    ProductFilterCriteriasContext,
  );

  return (
    <aside className="hidden rounded-xl bg-white p-4 lg:sticky lg:flex lg:h-[880px] lg:w-2/6 lg:flex-col lg:gap-4">
      <CardAsideBase title="Pricing">
        <BoxFormFilterByRangePrices />
      </CardAsideBase>
      <CardAsideBase title="Brands">
        <GroupCheckboxesBrands
          brands={contextProducts.brands}
          setBrandsSelected={contextProductFilterCriterias.setBrandsSelected}
        />
      </CardAsideBase>
      <CardAsideBase title="Storage">
        <GroupCheckboxesStorages
          storages={contextProducts.storages}
          setStoragesSelected={
            contextProductFilterCriterias.setStoragesSelected
          }
        />
      </CardAsideBase>
      <CardAsideBase title="Bluetooth">
        <GroupCheckboxesBluetooths
          bluetooths={contextProducts.bluetooths}
          setBluetoothsSelected={
            contextProductFilterCriterias.setBluetoothsSelected
          }
        />
      </CardAsideBase>
    </aside>
  );
}
