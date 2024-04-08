import Icon16x16Close from '../@icons/16x16/Icon16x16Close';
import Icon16x16Filter from '../@icons/16x16/Icon16x16Filter';
import BoxGridProducts from '../boxes/BoxGridProducts';

export default function SectionComputers() {
  return (
    <section className="flex flex-col gap-4">
      <header className="flex items-center justify-between gap-2">
        <h2 className="text-xl font-bold">Computers</h2>
        <div className="flex items-center justify-between gap-2">
          <button className="flex min-h-[1.875rem] max-w-[5.125rem] items-center gap-2 rounded-lg border-[1px] border-light-950 px-4">
            <span className="w-[1rem]">
              <Icon16x16Filter />
            </span>
            <span className="text-[.75rem]">Filter</span>
          </button>
          <button className="flex min-h-[1.875rem] max-w-[5.125rem] items-center gap-2 rounded-lg border-[1px] border-light-950 px-4">
            <span className="w-[1rem]">
              <Icon16x16Close />
            </span>
            <span className="text-[.75rem]">Reset</span>
          </button>
        </div>
      </header>
      <BoxGridProducts />
    </section>
  );
}
