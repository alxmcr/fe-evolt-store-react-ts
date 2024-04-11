import React from 'react';
import { formatNumber } from '../../helpers/helpers-format';
import FormFilterByRangePrices from '../forms/FormFilterByRangePrices';

type Props = {
  minPrice: number;
  maxPrice: number;
  minValue: number;
  maxValue: number;
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
};

export default function BoxFormFilterByRangePrices({
  minPrice = 0,
  maxPrice = 0,
  minValue = 0,
  maxValue = 0,
  setMinPrice,
  setMaxPrice,
}: Props) {
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
