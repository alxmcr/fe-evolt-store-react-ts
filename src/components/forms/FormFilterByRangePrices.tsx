import React from 'react';
import Icon16x16ArrowRight from '../@icons/16x16/Icon16x16ArrowRight';
import GroupInputsRangePrices from '../groups-inputs/GroupInputsRangePrices';
import { ProductFilterCriteriasContext } from '../../providersxxx/ProductFilterCriteriasProviderxxxx/ProductFilterCriteriasContext';
import { FilterProductTag } from '../../@types/filterTypes';
import { formatNumber } from '../../helpers/helpers-format';

export default function FormFilterByRangePrices() {
  const contextProductFilterCriterias = React.useContext(ProductFilterCriteriasContext);

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();

    contextProductFilterCriterias.setTagsFilter((prev) => {
      const tagId = `tag-range-pricing`;
      const minPrice = contextProductFilterCriterias.minPrice;
      const maxPrice = contextProductFilterCriterias.maxPrice;

      // Format data
      const minPriceStr = formatNumber(minPrice);
      const maxPriceStr = formatNumber(maxPrice);

      const rangePricing = `$${minPriceStr} - $${maxPriceStr}`;

      // create a tag
      const tag: FilterProductTag = {
        id: tagId,
        key: 'range-pricing',
        value: rangePricing,
        typeValue: 'string',
      };
      return [...prev, tag];
    });
  };

  return (
    <form onSubmit={onSubmit} className="flex items-start gap-3">
      <GroupInputsRangePrices />
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
