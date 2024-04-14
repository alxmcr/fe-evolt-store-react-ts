import React from 'react';
import { FilterCriteriasContext } from '../../@providers/FilterCriteriasProvider/FilterCriteriasContext';
import { formatNumber } from '../../helpers/helpers-format';
import FormFilterByRangePrices from '../forms/FormFilterByRangePrices';

export default function BoxFormFilterByRangePrices() {
  const contextFilterCriterias = React.useContext(FilterCriteriasContext);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 ">
        <span>$ {formatNumber(contextFilterCriterias.minPrice)}</span>
        <span>-</span>
        <span>$ {formatNumber(contextFilterCriterias.maxPrice)}</span>
      </div>
      <FormFilterByRangePrices />
    </div>
  );
}
