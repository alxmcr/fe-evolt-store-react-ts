import React from 'react';
import { FilterProductTag } from '../../@types/filterTypes';
import { ProductFilterCriteriasContext } from '../../providers/ProductFilterCriteriasProvider/ProductFilterCriteriasContext';
import TagFilter from './TagFilter';

type Props = {
  tagsFilter: FilterProductTag[];
};

export default function TagsFilterGroup({ tagsFilter = [] }: Props) {
  const contextFilterProducts = React.useContext(ProductFilterCriteriasContext);

  const removeTagFilter = (tagToRemove: FilterProductTag) => {
    console.log('🚀 ~ removeTagFilter ~ tagToRemove:', tagToRemove);
    contextFilterProducts.setTagsFilter((prev) =>
      prev.filter((tag) => tag.id !== tagToRemove.id),
    );
    console.log(contextFilterProducts.tagsFilter);
  };

  if (tagsFilter.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-3">
      {tagsFilter.map((tagFilter) => (
        <TagFilter
          key={tagFilter.id}
          tagFilter={tagFilter}
          removeFilter={() => removeTagFilter(tagFilter)}
        />
      ))}
    </div>
  );
}
