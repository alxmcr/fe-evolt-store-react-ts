import Icon16x16Close from '../@icons/16x16/Icon16x16Close';
import Icon16x16Filter from '../@icons/16x16/Icon16x16Filter';
import BoxGridProducts from '../boxes/BoxGridProducts';

export default function SectionComputers() {
  return (
    <section>
      <header>
        <h2>Computers</h2>
        <div>
          <button>
            <Icon16x16Filter />
            <span>Filter</span>
          </button>
          <button>
            <Icon16x16Close />
            <span>Reset</span>
          </button>
        </div>
      </header>
      <BoxGridProducts />
    </section>
  );
}
