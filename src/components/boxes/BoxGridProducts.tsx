import React from 'react';
import { ProductsContext } from '../../@providers/ProductsProvider/ProductsContext';
import GridProducts from '../grids/GridProducts';

export default function BoxGridProducts() {
  const products = React.useContext(ProductsContext);

  return (
    <div className="flex w-full flex-col gap-4 lg:w-4/6">
      <GridProducts products={products} />
    </div>
  );
}
