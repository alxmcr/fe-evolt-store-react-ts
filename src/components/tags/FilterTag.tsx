import Icon16x16Close from '../@icons/16x16/Icon16x16Close';

type Props = {
  children: React.ReactNode;
  removeFilter: () => void;
};

export default function FilterTag({ children, removeFilter }: Props) {
  return (
    <div className="flex items-center gap-2 border border-perano-600 p-[.4375rem] font-semibold text-perano-600">
      <span>{children}</span>
      <button className="text-red-500" onClick={removeFilter}>
        <Icon16x16Close />
      </button>
    </div>
  );
}
