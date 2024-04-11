import AsideProductsFilter from '../asides/AsideProductsFilter';
import BoxGridProducts from '../boxes/BoxGridProducts';
import HeaderFilterActions from '../headers/HeaderFilterActions';

export default function SectionComputers() {
  return (
    <section className="flex flex-col gap-4">
      <HeaderFilterActions />
      <div className="lg:relative lg:flex lg:gap-4">
        <AsideProductsFilter />
        <BoxGridProducts />
      </div>
    </section>
  );
}
