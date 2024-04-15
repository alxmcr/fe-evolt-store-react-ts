import Icon16x16Close from '../@icons/16x16/Icon16x16Close';
import TagsFilterGroup from '../tags/TagsFilterGroup';

export default function BoxFilterActions() {
  return (
    <div className="flex flex-col flex-wrap justify-start gap-4 rounded-lg bg-light-50 p-4">
      <header className="flex items-center gap-4">
        <h4 className="font-bold uppercase">Filters</h4>
        <button
          className="flex min-h-[1.875rem] max-w-[5.125rem] items-center gap-2 rounded-lg border border-light-950 px-4"
          onClick={() => {}}
        >
          <span className="w-4">
            <Icon16x16Close />
          </span>
          <span className="text-[.75rem]">Reset</span>
        </button>
      </header>
      <TagsFilterGroup tagsFilter={[]} />
    </div>
  );
}
