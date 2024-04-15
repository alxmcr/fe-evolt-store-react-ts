import React from 'react';
import { FilterCriteriasDispatchContext } from '../../@providers/FilterCriteriasProvider/FilterCriteriasContext';
import { ProductsLimitsPriceContext } from '../../@providers/ProductsProvider/ProductsContext';
import {
  FilterProductsTagsContext,
  FilterProductsTagsDispatchContext,
} from '../../@providers/TagsFilterProvider/TagsFilterContext';
import { FilterProductTag } from '../../@types/filterTypes';
import { checkExists } from '../../helpers/helpers-providers';
import Icon16x16ArrowRight from '../@icons/16x16/Icon16x16ArrowRight';

export default function FormFilterByRangePrices() {
  const limitsPrice = React.useContext(ProductsLimitsPriceContext);
  console.log('🚀 ~ FormFilterByRangePrices ~ limitsPrice:', limitsPrice);
  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(0);
  const tagFilters = React.useContext(FilterProductsTagsContext);
  const dispatchTagsFilter = React.useContext(FilterProductsTagsDispatchContext);
  const dispatchFilterCriterias = React.useContext(FilterCriteriasDispatchContext);

  const onChangeMinPrice = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(ev.target.valueAsNumber);
  };

  const onChangeMaxPrice = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(ev.target.valueAsNumber);
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
    const textTag = `${minPrice} - ${maxPrice}`;
    const isNewTag = checkExists(tagFilters, textTag);
    const tag: FilterProductTag = {
      id: 'tag-price-range',
      key: 'price-range',
      value: textTag,
    };

    if (isNewTag) {
      dispatchTagsFilter({
        type: 'added_tag_filter',
        payload: tag,
      });
    } else {
      dispatchTagsFilter({
        type: 'updated_tag_filter',
        payload: { ...tag, value: textTag },
      });
    }
  };

  React.useEffect(() => {
    setMinPrice(Math.floor(limitsPrice.startPrice / 2));
    setMaxPrice(limitsPrice.startPrice);
  }, [limitsPrice.startPrice]);

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
              type="number"
              name="min-price-range"
              id="min-price-range"
              value={minPrice}
              onChange={onChangeMinPrice}
              min={Math.floor(limitsPrice.startPrice / 2)}
              max={limitsPrice.startPrice - 1}
              required
            />
            <span className="flex h-[2.875rem] w-12 items-center justify-center rounded-r-md bg-perano-500 text-xl text-white">
              $
            </span>
          </div>
          <span className="text-center text-[.75rem] text-perano-500">Min. Price</span>
        </label>
        <span className="flex h-[2.875rem] w-[1.125rem] items-center justify-center text-[.875rem]">
          to
        </span>
        <label
          htmlFor="max-price-range"
          className="flex h-[4.5rem] min-w-[5.875rem] flex-col gap-1  text-perano-500"
        >
          <div className="flex h-[2.875rem] w-[110px] items-center justify-between rounded-md border border-perano-500 bg-white">
            <input
              className="size-full rounded-l-md px-2 text-xl text-light-950 outline-none"
              type="number"
              name="max-price-range"
              id="max-price-range"
              value={maxPrice}
              onChange={onChangeMaxPrice}
              min={limitsPrice.startPrice}
              max={limitsPrice.endPrice}
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
