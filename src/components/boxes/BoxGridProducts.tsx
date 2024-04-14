import React from 'react';
import { ProductFilterCriteriasContext } from '../../providersxxx/ProductFilterCriteriasProvider/ProductFilterCriteriasContext';
import GridProducts from '../grids/GridProducts';
import BoxFilterActions from './BoxFilterActions';

export default function BoxGridProducts() {
  const contextProductFilterCriterias = React.useContext(
    ProductFilterCriteriasContext,
  );

  return (
    <div className="flex flex-col gap-4 lg:w-4/6">
      {contextProductFilterCriterias.tagsFilter.length > 0 ? (
        <BoxFilterActions />
      ) : null}
      <GridProducts products={contextProductFilterCriterias.productsFiltered} />
    </div>
  );
}
