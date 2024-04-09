import React from 'react';
import Icon16x16ArrowRight from '../@icons/16x16/Icon16x16ArrowRight';
import FormFielPriceInput from '../forms-formfields/FormFielPriceInput';

type Props = {
  minValue: number;
  maxValue: number;
  startMinValue: number;
  startMaxValue: number;
};

export default function FormFilterByRangePrices({
  minValue = 0,
  maxValue = 0,
  startMinValue = 0,
  startMaxValue = 0,
}: Props) {
  const [minPrice, setMinPrice] = React.useState(startMinValue);
  const [maxPrice, setMaxPrice] = React.useState(startMaxValue);

  const onChangeMinPrice = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(ev.target.value));
  };

  const onChangeMaxPrice = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(ev.target.value));
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="flex items-start gap-3">
      <div className="flex min-w-[13.375rem] gap-2">
        <FormFielPriceInput
          labelText="Min price"
          inputName="min-range"
          inputId="min-range"
          inputValue={minPrice}
          minValue={minValue}
          maxValue={maxPrice - 1}
          onChange={onChangeMinPrice}
        />
        <span className="flex h-[2.875rem] w-[1.125rem] items-center justify-center text-[.875rem]">
          to
        </span>
        <FormFielPriceInput
          labelText="Max price"
          inputName="max-range"
          inputId="max-range"
          inputValue={maxPrice}
          minValue={minPrice + 1}
          maxValue={maxValue}
          onChange={onChangeMaxPrice}
        />
      </div>
      <div>
        <button
          type="submit"
          className="flex h-[2.875rem] w-8 items-center justify-center rounded-md bg-perano-300 text-xl text-white"
        >
          <Icon16x16ArrowRight />
        </button>
      </div>
    </form>
  );
}
