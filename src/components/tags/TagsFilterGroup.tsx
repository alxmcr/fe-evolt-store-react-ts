import { FilterProductTag } from '../../@types/filterTypes';
import TagFilter from './TagFilter';

type Props = {
  tagsFilter: FilterProductTag[];
};

export default function TagsFilterGroup({ tagsFilter = [] }: Props) {
  const removeTagFilter = (tagToRemove: FilterProductTag) => {
    console.log(tagToRemove);
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
