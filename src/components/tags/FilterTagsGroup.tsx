import { FilterProductTag } from '../../@types/appTypes';
import FilterTag from './FilterTag';

type Props = {
  filterTags: FilterProductTag[];
};

export default function FilterTagsGroup({ filterTags = [] }: Props) {
  if (filterTags.length === 0) return null;

  return (
    <div className="flex items-center gap-2">
      {filterTags.map((filterTag) => (
        <FilterTag
          key={filterTag.key}
          filterTag={filterTag}
          removeFilter={() => {}}
        />
      ))}
    </div>
  );
}
