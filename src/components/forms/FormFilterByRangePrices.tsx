import React from 'react';
import Icon16x16ArrowRight from '../@icons/16x16/Icon16x16ArrowRight';
import GroupInputsRangePrices from '../groups-inputs/GroupInputsRangePrices';

type Props = {
  minValue: number;
  maxValue: number;
  minPrice: number;
  maxPrice: number;
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
};

export default function FormFilterByRangePrices({
  minPrice = 0,
  maxPrice = 0,
  minValue = 0,
  maxValue = 0,
  setMinPrice,
  setMaxPrice,
}: Props) {
  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="flex items-start gap-3">
      <GroupInputsRangePrices
        minPrice={minPrice}
        maxPrice={maxPrice}
        minValue={minValue}
        maxValue={maxValue}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
      />
      <div>
        <button
          type="submit"
          className="flex h-[2.875rem] w-8 items-center justify-center rounded-md bg-perano-500 text-xl text-white"
        >
          <Icon16x16ArrowRight />
        </button>
      </div>
    </form>
  );
}
