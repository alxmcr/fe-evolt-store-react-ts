import React from 'react';
import { formatNumber } from '../../helpers/helpers-format';
import FormFilterByRangePrices from '../forms/FormFilterByRangePrices';

type Props = {
  minValue: number;
  maxValue: number;
  startMinValue: number;
  startMaxValue: number;
};

export default function BoxFormFilterByRangePrices({
  minValue = 0,
  maxValue = 0,
  startMinValue = 0,
  startMaxValue = 0,
}: Props) {
  const [minPrice, setMinPrice] = React.useState(startMinValue);
  const [maxPrice, setMaxPrice] = React.useState(startMaxValue);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 ">
        <span>$ {formatNumber(minPrice)}</span>
        <span>-</span>
        <span>$ {formatNumber(maxPrice)}</span>
      </div>
      <FormFilterByRangePrices
        minValue={minValue}
        maxValue={maxValue}
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
      />
    </div>
  );
}
