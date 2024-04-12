import React from 'react';
import { ProductsContext } from '../../providers/ProductsProvider/ProductsContext';
import GridProducts from '../grids/GridProducts';
import BoxFilterActions from './BoxFilterActions';

export default function BoxGridProducts() {
  const contextProducts = React.useContext(ProductsContext);

  return (
    <div className="flex flex-col gap-4 lg:w-4/6">
      <BoxFilterActions />
      <GridProducts products={contextProducts.productsFiltered} />
    </div>
  );
}
