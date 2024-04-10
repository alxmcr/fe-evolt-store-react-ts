import React from 'react';
import { formatNumber } from '../../helpers/helpers-format';
import FormFilterByRangePrices from '../forms/FormFilterByRangePrices';

export default function BoxFormFilterByRangePrices() {
  const MIN_VALUE = 1;
  const MAX_VALUE = 1100;
  const START_MIN_VALUE = 500;
  const START_MAX_VALUE = 900;
  const [minPrice, setMinPrice] = React.useState(START_MIN_VALUE);
  const [maxPrice, setMaxPrice] = React.useState(START_MAX_VALUE);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 ">
        <span>$ {formatNumber(minPrice)}</span>
        <span>-</span>
        <span>$ {formatNumber(maxPrice)}</span>
      </div>
      <FormFilterByRangePrices
        minValue={MIN_VALUE}
        maxValue={MAX_VALUE}
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
      />
    </div>
  );
}
