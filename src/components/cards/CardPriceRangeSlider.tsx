import React from 'react';
import FormFielPriceInput from '../forms-formfields/FormFielPriceInput';
import { formatNumber } from '../../helpers/helpers-format';
import Icon16x16ArrowRight from '../@icons/16x16/Icon16x16ArrowRight';

export default function CardPriceRangeSlider() {
  const MIN_VALUE = 1;
  const MAX_VALUE = 1100;
  const START_MIN_VALUE = 500;
  const START_MAX_VALUE = 900;
  const [minPrice, setMinPrice] = React.useState(START_MIN_VALUE);
  const [maxPrice, setMaxPrice] = React.useState(START_MAX_VALUE);

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
    <article className="flex flex-col gap-3">
      <header className="flex flex-col gap-1">
        <h4 className="font-bold uppercase tracking-widest text-perano-500">
          Pricing
        </h4>
        <div className="flex gap-2 text-perano-300">
          <span>$ {formatNumber(minPrice)}</span>
          <span>-</span>
          <span>$ {formatNumber(maxPrice)}</span>
        </div>
      </header>
      <form onSubmit={onSubmit} className="flex items-start gap-3">
        <div className="flex min-w-[13.375rem] gap-2">
          <FormFielPriceInput
            labelText="Min price"
            inputName="min-range"
            inputId="min-range"
            inputValue={minPrice}
            inputMin={MIN_VALUE}
            inputMax={maxPrice - 1}
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
            inputMin={minPrice + 1}
            inputMax={MAX_VALUE}
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
    </article>
  );
}
