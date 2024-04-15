import { TagFilterProduct } from '../../@types/filterTypes';
import Icon16x16Close from '../@icons/16x16/Icon16x16Close';

type Props = {
  tagFilter: TagFilterProduct;
  removeFilter: () => void;
};

export default function TagFilter({ tagFilter, removeFilter }: Props) {
  if (tagFilter === null || tagFilter === undefined) return null;

  return (
    <div className="flex items-center gap-2 border border-perano-600 p-[.4375rem] font-semibold text-perano-600">
      <span>{tagFilter.valueText}</span>
      <button className="text-red-500" onClick={removeFilter}>
        <Icon16x16Close />
      </button>
    </div>
  );
}
