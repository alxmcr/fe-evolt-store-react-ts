import React from 'react';
import { ProductFilterCriteriasContext } from '../../providers/ProductFilterCriteriasProvider/ProductFilterCriteriasContext';
import { ProductsContext } from '../../providers/ProductsProvider/ProductsContext';
import GridProducts from '../grids/GridProducts';
import HeaderFilterActions from '../headers/HeaderFilterActions';

export default function BoxGridProducts() {
  const contextProducts = React.useContext(ProductsContext);
  const contextProductFilterCriterias = React.useContext(
    ProductFilterCriteriasContext,
  );

  console.log({ contextProductFilterCriterias });

  return (
    <div className="flex flex-col gap-4 lg:w-4/6">
      <HeaderFilterActions />
      <GridProducts products={contextProducts.productsFiltered} />
    </div>
  );
}
