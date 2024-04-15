import AsideProductsFilter from '../asides/AsideProductsFilter';
import BoxGridProducts from '../boxes/BoxGridProducts';

export default function SectionComputers() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Computers (0)</h2>
      <div className="lg:relative lg:flex lg:gap-4">
        <AsideProductsFilter />
        <BoxGridProducts />
      </div>
    </section>
  );
}
