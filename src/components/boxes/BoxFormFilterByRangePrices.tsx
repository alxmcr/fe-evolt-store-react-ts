import React from 'react';
import { formatNumber } from '../../helpers/helpers-format';
import { ProductFilterCriteriasContext } from '../../providersxxx/ProductFilterCriteriasProviderxxxx/ProductFilterCriteriasContext';
import FormFilterByRangePrices from '../forms/FormFilterByRangePrices';

export default function BoxFormFilterByRangePrices() {
  const contextProductFilterCriterias = React.useContext(ProductFilterCriteriasContext);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 ">
        <span>$ {formatNumber(contextProductFilterCriterias.minPrice)}</span>
        <span>-</span>
        <span>$ {formatNumber(contextProductFilterCriterias.maxPrice)}</span>
      </div>
      <FormFilterByRangePrices />
    </div>
  );
}
