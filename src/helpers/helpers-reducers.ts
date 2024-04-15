import { TagFilterAction, TagFilterProduct } from '../@types/filterTypes';

export const checkExistsRangePriceByCategory = (tags: TagFilterProduct[] = [], categoryTag = '') => {
  console.log('🚀 ~ checkExists ~ textTag:', categoryTag);
  if (tags.length === 0) return true;

  return tags.findIndex((t) => t.category === categoryTag) === -1;
};

export const handleAddTagRangePrice = (
  tagFilters: TagFilterProduct[] = [],
  minPrice = 0,
  maxPrice = 0,
  dispatchTagsFilter: (value: TagFilterAction) => void,
) => {
  const textTag = `${minPrice} - ${maxPrice}`;
  const isNewTag = checkExistsRangePriceByCategory(tagFilters, 'range-price');

  // Build tag
  const tag: TagFilterProduct = {
    id: 'tag-price-range-001',
    category: 'range-price',
    valueText: textTag,
    valueId: 'range-price'
  };

  if (isNewTag) {
    dispatchTagsFilter({
      type: 'added_tag_filter',
      payload: tag,
    });
  } else {
    dispatchTagsFilter({
      type: 'updated_tag_filter',
      payload: { ...tag, valueText: textTag },
    });
  }
};
