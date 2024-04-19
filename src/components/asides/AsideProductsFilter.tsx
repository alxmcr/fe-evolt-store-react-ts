import React from 'react';
import { FilterCriteriasContext } from '../../@providers/FilterCriteriasProvider/FilterCriteriasContext';
import BoxFormFilterByRangePrices from '../boxes/BoxFormFilterByRangePrices';
import CardAsideBase from '../cards/CardAsideBase';
import GroupCheckboxesBluetooths from '../groups-checkboxes/GroupCheckboxesBluetooths';
import GroupCheckboxesBrands from '../groups-checkboxes/GroupCheckboxesBrands';
import GroupCheckboxesStorages from '../groups-checkboxes/GroupCheckboxesStorages';

export default function AsideProductsFilter() {
  const contextFilterCriterias = React.useContext(FilterCriteriasContext);

  return (
    <>
      <CardAsideBase title="Pricing">
        <BoxFormFilterByRangePrices />
      </CardAsideBase>
      <CardAsideBase title="Brands">
        <GroupCheckboxesBrands brands={contextFilterCriterias.brands} />
      </CardAsideBase>
      <CardAsideBase title="Storage">
        <GroupCheckboxesStorages storages={contextFilterCriterias.storages} />
      </CardAsideBase>
      <CardAsideBase title="Bluetooth">
        <GroupCheckboxesBluetooths bluetooths={contextFilterCriterias.bluetooths} />
      </CardAsideBase>
    </>
  );
}
