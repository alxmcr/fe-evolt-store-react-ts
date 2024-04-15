import { FilterProductTag, TagFilterAction } from '../@types/filterTypes';

export const checkExistsRangePriceByKey = (tags: FilterProductTag[] = [], keyTag = '') => {
  console.log('🚀 ~ checkExists ~ textTag:', keyTag);
  if (tags.length === 0) return true;

  return tags.findIndex((t) => t.key === keyTag) === -1;
};

export const handleAddTagRangePrice = (
  tagFilters: FilterProductTag[] = [],
  minPrice = 0,
  maxPrice = 0,
  dispatchTagsFilter: (value: TagFilterAction) => void,
) => {
  const keyTag = 'price-range';
  const textTag = `${minPrice} - ${maxPrice}`;
  const isNewTag = checkExistsRangePriceByKey(tagFilters, keyTag);

  // Build tag
  const tag: FilterProductTag = {
    id: 'tag-price-range-001',
    key: keyTag,
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
