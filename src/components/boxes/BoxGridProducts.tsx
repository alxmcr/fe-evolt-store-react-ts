import useProducts from '../../hooks/useProducts';
import GridProducts from '../grids/GridProducts';
import HeaderFilterActions from '../headers/HeaderFilterActions';

export default function BoxGridProducts() {
  const { products } = useProducts();

  return (
    <div className="flex flex-col gap-4 lg:w-4/6">
      <HeaderFilterActions />
      <GridProducts products={products} />
    </div>
  );
}
