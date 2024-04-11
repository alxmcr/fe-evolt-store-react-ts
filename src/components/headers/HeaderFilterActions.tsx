import Icon16x16Close from '../@icons/16x16/Icon16x16Close';
import Icon16x16Filter from '../@icons/16x16/Icon16x16Filter';

export default function HeaderFilterActions() {
  return (
    <header className="flex items-center justify-between gap-2 rounded-lg bg-white p-[.5rem]">
      <div className="flex items-center justify-between gap-2">
        <button className="flex min-h-[1.875rem] max-w-[5.125rem] items-center gap-2 rounded-lg border border-light-950 px-4 lg:hidden">
          <span className="w-4">
            <Icon16x16Filter />
          </span>
          <span className="text-[.75rem]">Filter</span>
        </button>
        <button className="flex min-h-[1.875rem] max-w-[5.125rem] items-center gap-2 rounded-lg border border-light-950 px-4">
          <span className="w-4">
            <Icon16x16Close />
          </span>
          <span className="text-[.75rem]">Reset</span>
        </button>
      </div>
      <div></div>
    </header>
  );
}
