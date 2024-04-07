import { ProductData } from '../../@types/appTypes';
import CardProduct from '../cards/CardProduct';

type Props = {
  products: ProductData[];
};

export default function GridProducts({ products = [] }: Props) {
  if (products.length === 0) {
    return (
      <div>
        <h2>No products</h2>
      </div>
    );
  }

  return (
    <div className="grid columns-2">
      {products.map((product) => (
        <CardProduct product={product} key={product.id} />
      ))}
    </div>
  );
}
