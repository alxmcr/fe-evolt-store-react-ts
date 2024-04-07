import Icon15x15Close from '../@icons/15x15/Icon15x15Close';
import Icon15x15Filter from '../@icons/15x15/Icon15x15Filter';
import BoxGridProducts from '../boxes/BoxGridProducts';

export default function SectionComputers() {
  return (
    <section>
      <header>
        <h2>Computers</h2>
        <div>
          <button>
            <Icon15x15Filter />
            <span>Filter</span>
          </button>
          <button>
            <Icon15x15Close />
            <span>Reset</span>
          </button>
        </div>
      </header>
      <BoxGridProducts />
    </section>
  );
}
