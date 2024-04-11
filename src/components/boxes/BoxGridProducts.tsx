import { TagFilter } from '../../@types/filterTypes';
import useProducts from '../../hooks/useProducts';
import GridProducts from '../grids/GridProducts';
import HeaderFilterActions from '../headers/HeaderFilterActions';

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
    <div className="flex flex-col gap-4 lg:w-4/6">
      <HeaderFilterActions />
      <GridProducts products={products} />
    </div>
  );
}
