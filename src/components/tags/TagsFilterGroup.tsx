import React from 'react';
import { FilterProductsTagsDispatchContext } from '../../@providers/TagsFilterProvider/TagsFilterContext';
import { FilterProductTag } from '../../@types/filterTypes';
import TagFilter from './TagFilter';

type Props = {
  tagsFilter: FilterProductTag[];
};

export default function TagsFilterGroup({ tagsFilter = [] }: Props) {
  // const dispatch = React.useContext(FilterCriteriasDispatchContext);
  const dispatchTagsFilter = React.useContext(FilterProductsTagsDispatchContext);

  const removeTagFilter = (tagToRemove: FilterProductTag) => {
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
