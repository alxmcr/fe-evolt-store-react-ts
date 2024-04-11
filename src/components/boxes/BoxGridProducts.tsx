import { TagFilter } from '../../@types/filterTypes';
import useProducts from '../../hooks/useProducts';
import GridProducts from '../grids/GridProducts';

type Props = {
  brandsSelected: TagFilter[];
  bluetoothsSelected: TagFilter[];
  storagesSelected: TagFilter[];
};

export default function BoxGridProducts({
  brandsSelected,
  bluetoothsSelected,
  storagesSelected,
}: Props) {
  console.log({ brandsSelected, bluetoothsSelected, storagesSelected });

  const { products } = useProducts();

  return (
    <div>
      <GridProducts products={products} />
    </div>
  );
}
