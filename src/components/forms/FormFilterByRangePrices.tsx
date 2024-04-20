import React from 'react';
import { FilterCriteriasDispatchContext } from '../../@providers/FilterCriteriasProvider/FilterCriteriasContext';
import {
  ProductCheapestContext,
  ProductMostExpensiveContext,
} from '../../@providers/ProductsProvider/ProductsContext';
import {
  FilterProductsTagsContext,
  FilterProductsTagsDispatchContext,
} from '../../@providers/TagsFilterProvider/TagsFilterContext';
import { createNewRange } from '../../helpers/helpers-hooks';
import { handleAddTagRangePrice } from '../../helpers/helpers-reducers';
import Icon16x16ArrowRight from '../@icons/16x16/Icon16x16ArrowRight';

export default function FormFilterByRangePrices() {
  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(0);
  const productCheapest = React.useContext(ProductCheapestContext);
  const productMostExpensive = React.useContext(ProductMostExpensiveContext);
  const tagFilters = React.useContext(FilterProductsTagsContext);
  const dispatchTagsFilter = React.useContext(FilterProductsTagsDispatchContext);
  const dispatchFilterCriterias = React.useContext(FilterCriteriasDispatchContext);

  const onChangeMinPrice = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const number = Number(ev.target.value);

    if (!isNaN(number)) {
      setMinPrice(number);
    }
  };

  const onChangeMaxPrice = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const number = Number(ev.target.value);

    if (!isNaN(number)) {
      setMaxPrice(number);
    }
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();

    // Filter criterias
    dispatchFilterCriterias({
      type: 'update_min_price',
      payload: {
        min: minPrice,
      },
    });

    dispatchFilterCriterias({
      type: 'update_max_price',
      payload: {
        max: maxPrice,
      },
    });

    // Tags filter
    handleAddTagRangePrice(tagFilters, minPrice, maxPrice, dispatchTagsFilter);
  };

  React.useEffect(() => {
    if (productCheapest !== null && productMostExpensive !== null) {
      const [minValue, maxValue] = createNewRange(
        productCheapest.priceValue,
        productMostExpensive.priceValue,
      );
      setMinPrice(Math.floor(minValue));
      setMaxPrice(Math.floor(maxValue));
    }
  }, [productCheapest, productMostExpensive]);

  if (productCheapest === null) return null;

  if (productMostExpensive === null) return null;

  return (
    <form onSubmit={onSubmit} className="flex items-start gap-3">
      <div className="flex min-w-[13.375rem] gap-2">
        <label
          htmlFor="min-price-range"
          className="flex h-[4.5rem] min-w-[5.875rem] flex-col gap-1  text-perano-500"
        >
          <div className="flex h-[2.875rem] w-[110px] items-center justify-between rounded-md border border-perano-500 bg-white">
            <input
              className="size-full rounded-l-md px-2 text-xl text-light-950 outline-none"
              type="text"
              name="min-price-range"
              id="min-price-range"
              autoComplete="off"
              placeholder="Min."
              value={minPrice}
              onChange={onChangeMinPrice}
              required
            />
            <span className="flex h-[2.875rem] w-12 items-center justify-center rounded-r-md bg-perano-500 text-xl text-white">
              $
            </span>
          </div>
          <span className="text-center text-[.75rem] text-perano-500">Min. Price</span>
        </label>
        <span className="flex h-[2.875rem] w-[1.125rem] items-center justify-center text-[.875rem]">to</span>
        <label
          htmlFor="max-price-range"
          className="flex h-[4.5rem] min-w-[5.875rem] flex-col gap-1  text-perano-500"
        >
          <div className="flex h-[2.875rem] w-[110px] items-center justify-between rounded-md border border-perano-500 bg-white">
            <input
              className="size-full rounded-l-md px-2 text-xl text-light-950 outline-none"
              type="text"
              name="max-price-range"
              id="max-price-range"
              autoComplete="off"
              placeholder="Max."
              value={maxPrice}
              onChange={onChangeMaxPrice}
              required
            />
            <span className="flex h-[2.875rem] w-12 items-center justify-center rounded-r-md bg-perano-500 text-xl text-white">
              $
            </span>
          </div>
          <span className="text-center text-[.75rem] text-perano-500">Max. Price</span>
        </label>
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
