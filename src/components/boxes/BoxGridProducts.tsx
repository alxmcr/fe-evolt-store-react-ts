import useProducts from '../../hooks/useProducts';
import GridProducts from '../grids/GridProducts';

export default function BoxGridProducts() {
  const { products } = useProducts();

  return (
    <div>
      <GridProducts products={products} />
    </div>
  );
}
