import { FilterProductTag } from '../../@types/filterTypes';
import Icon16x16Close from '../@icons/16x16/Icon16x16Close';

type Props = {
  filterTag: FilterProductTag;
  removeFilter: () => void;
};

export default function FilterTag({ filterTag, removeFilter }: Props) {
  if (filterTag === null || filterTag === undefined) return null;

  return (
    <div className="flex items-center gap-2 border border-perano-600 p-[.4375rem] font-semibold text-perano-600">
      <span>{filterTag.value}</span>
      <button className="text-red-500" onClick={removeFilter}>
        <Icon16x16Close />
      </button>
    </div>
  );
}
