import React from 'react';
import { FilterProductsTagsDispatchContext } from '../../@providers/TagsFilterProvider/TagsFilterContext';
import { TagFilterProduct } from '../../@types/filterTypes';
import TagFilter from './TagFilter';

type Props = {
  tagsFilter: TagFilterProduct[];
};

export default function TagsFilterGroup({ tagsFilter = [] }: Props) {
  // const dispatch = React.useContext(FilterCriteriasDispatchContext);
  const dispatchTagsFilter = React.useContext(FilterProductsTagsDispatchContext);

  const removeTagFilter = (tagToRemove: TagFilterProduct) => {
    // Unchecked
    /*
    dispatch({
      type: 'checked_brand',
      payload: {
        id: brand.id,
        checked: false,
      },
    });
    */

    // Remove tag
    dispatchTagsFilter({
      type: 'deleted_tag_filter',
      payload: {
        id: tagToRemove.id,
      },
    });
  };

  if (tagsFilter.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-3">
      {tagsFilter.map((tagFilter) => (
        <TagFilter key={tagFilter.id} tagFilter={tagFilter} removeFilter={() => removeTagFilter(tagFilter)} />
      ))}
    </div>
  );
}
