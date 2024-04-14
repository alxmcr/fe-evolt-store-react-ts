import React from 'react';
import {
    FilterCriteriasContext,
    FilterCriteriasDispatchContext,
} from '../../@providers/FilterCriteriasProvider/FilterCriteriasContext';
import { ProductsLimitsPriceContext } from '../../@providers/ProductsProvider/ProductsContext';
import Icon16x16ArrowRight from '../@icons/16x16/Icon16x16ArrowRight';
import FormFielPriceInput from '../forms-formfields/FormFielPriceInput';

export default function FormFilterByRangePrices() {
  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(0);
  const limitsPrice = React.useContext(ProductsLimitsPriceContext);
  const filterCriterias = React.useContext(FilterCriteriasContext);
  const dispatch = React.useContext(FilterCriteriasDispatchContext);

  const onChangeMinPrice = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(ev.target.valueAsNumber);
  };

  const onChangeMaxPrice = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(ev.target.valueAsNumber);
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();

    dispatch({
      type: 'update_min_price',
      payload: {
        min: minPrice,
      },
    });

    dispatch({
      type: 'update_max_price',
      payload: {
        max: maxPrice,
      },
    });
  };

  return (
    <form onSubmit={onSubmit} className="flex items-start gap-3">
      <div className="flex min-w-[13.375rem] gap-2">
        <FormFielPriceInput
          labelText="Min price"
          inputName="min-range"
          inputId="min-range"
          inputValue={minPrice}
          minValueInput={limitsPrice.startPrice}
          maxValueInput={filterCriterias.maxPrice - 1}
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
          minValueInput={filterCriterias.minPrice + 1}
          maxValueInput={limitsPrice.endPrice}
          onChange={onChangeMaxPrice}
        />
      </div>
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
