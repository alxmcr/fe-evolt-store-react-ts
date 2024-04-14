import React from 'react';
import { formatNumber } from '../../helpers/helpers-format';
import FormFilterByRangePricesxxx from '../forms/FormFilterByRangePricesxxxx';
import { FilterCriteriasContext } from '../../@providers/FilterCriteriasProvider/FilterCriteriasContext';

export default function BoxFormFilterByRangePrices() {
  const contextFilterCriterias = React.useContext(FilterCriteriasContext);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 ">
        <span>$ {formatNumber(contextFilterCriterias.minPrice)}</span>
        <span>-</span>
        <span>$ {formatNumber(contextFilterCriterias.maxPrice)}</span>
      </div>
      <FormFilterByRangePricesxxx />
    </div>
  );
}
