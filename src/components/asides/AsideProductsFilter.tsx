import React from 'react';
import {
  findAllFilterBluetooths,
  findAllFilterBrands,
  findAllFilterStorages,
} from '../../helpers/helpers-products-filter';
import { ProductFilterCriteriasContext } from '../../providers/ProductFilterCriteriasProvider/ProductFilterCriteriasContext';
import BoxFormFilterByRangePrices from '../boxes/BoxFormFilterByRangePrices';
import CardAsideBase from '../cards/CardAsideBase';
import GroupCheckboxesBluetooths from '../groups-checkboxes/GroupCheckboxesBluetooths';
import GroupCheckboxesBrands from '../groups-checkboxes/GroupCheckboxesBrands';
import GroupCheckboxesStorages from '../groups-checkboxes/GroupCheckboxesStorages';

export default function AsideProductsFilter() {
  const { productsFiltered } = React.useContext(ProductFilterCriteriasContext);
  const brands = findAllFilterBrands(productsFiltered);
  const storages = findAllFilterStorages(productsFiltered);
  const bluetooths = findAllFilterBluetooths(productsFiltered);

  return (
    <aside className="hidden rounded-xl bg-white p-4 lg:sticky lg:flex lg:h-[880px] lg:w-2/6 lg:flex-col lg:gap-4">
      <CardAsideBase title="Pricing">
        <BoxFormFilterByRangePrices />
      </CardAsideBase>
      <CardAsideBase title="Brands">
        <GroupCheckboxesBrands brands={brands} />
      </CardAsideBase>
      <CardAsideBase title="Storage">
        <GroupCheckboxesStorages storages={storages} />
      </CardAsideBase>
      <CardAsideBase title="Bluetooth">
        <GroupCheckboxesBluetooths bluetooths={bluetooths} />
      </CardAsideBase>
    </aside>
  );
}
