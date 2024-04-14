import React from 'react';
import { ProductsContext } from '../../@providers/ProductsProvider/ProductsContext';
import GridProducts from '../grids/GridProducts';

export default function BoxGridProducts() {
  const products = React.useContext(ProductsContext);

  return (
    <div className="flex flex-col gap-4 lg:w-4/6">
      {/* {contextProductFilterCriterias.tagsFilter.length > 0 ? (
        <BoxFilterActions />
      ) : null} */}
      <GridProducts products={products} />
    </div>
  );
}
