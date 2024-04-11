import React from 'react';
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
