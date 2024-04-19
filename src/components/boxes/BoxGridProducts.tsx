import React from 'react';
import { ProductsContext } from '../../@providers/ProductsProvider/ProductsContext';
import { FilterProductsTagsContext } from '../../@providers/TagsFilterProvider/TagsFilterContext';
import GridProducts from '../grids/GridProducts';
import BoxFilterActions from './BoxFilterActions';

export default function BoxGridProducts() {
  const products = React.useContext(ProductsContext);
  const tagsFilter = React.useContext(FilterProductsTagsContext);

  return (
    <div className="flex w-full flex-col gap-4 lg:w-4/6">
      {tagsFilter.length > 0 ? <BoxFilterActions /> : null}
      <GridProducts products={products} />
    </div>
  );
}
