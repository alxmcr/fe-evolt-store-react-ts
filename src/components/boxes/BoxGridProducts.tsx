import React from 'react';
import { TagFilter } from '../../@types/filterTypes';
import { ProductsContext } from '../../providers/ProductsProvider/ProductsContext';
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
  const context = React.useContext(ProductsContext);

  console.log({ brandsSelected, bluetoothsSelected, storagesSelected });

  return (
    <div className="flex flex-col gap-4 lg:w-4/6">
      <HeaderFilterActions />
      <GridProducts products={context.productsFiltered} />
    </div>
  );
}
