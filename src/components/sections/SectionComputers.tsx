import Icon16x16Close from '../@icons/16x16/Icon16x16Close';
import Icon16x16Filter from '../@icons/16x16/Icon16x16Filter';
import BoxGridProducts from '../boxes/BoxGridProducts';

export default function SectionComputers() {
  return (
    <section>
      <header className="flex items-center justify-between">
        <h2>Computers</h2>
        <div className="flex items-center justify-between gap-2">
          <button className="flex h-[1.625rem] w-[4.625rem] items-center gap-2 rounded-lg border-[1px] border-light-950 px-8">
            <Icon16x16Filter />
            <span>Filter</span>
          </button>
          <button className="flex h-[1.625rem] w-[4.625rem] items-center gap-2 rounded-lg border-[1px] border-light-950 px-8">
            <Icon16x16Close />
            <span>Reset</span>
          </button>
        </div>
      </header>
      <BoxGridProducts />
    </section>
  );
}
