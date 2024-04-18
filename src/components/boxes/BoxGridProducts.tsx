import React from 'react';
import { ProductsContext } from '../../@providers/ProductsProvider/ProductsContext';
import { FilterProductsTagsContext } from '../../@providers/TagsFilterProvider/TagsFilterContext';
import GridProducts from '../grids/GridProducts';
import BoxFilterActions from './BoxFilterActions';
import { filterProductsByFilterCriterias } from '../../helpers/helpers-tags-filter';
import { FilterCriteriasContext } from '../../@providers/FilterCriteriasProvider/FilterCriteriasContext';

export default function BoxGridProducts() {
  const products = React.useContext(ProductsContext);
  const tagsFilter = React.useContext(FilterProductsTagsContext);
  const filterProductsCriterias = React.useContext(FilterCriteriasContext);
  const productsFiltered = filterProductsByFilterCriterias(products, filterProductsCriterias);

  return (
    <div className="flex flex-col gap-4 lg:w-4/6">
      {tagsFilter.length > 0 ? <BoxFilterActions /> : null}
      <GridProducts products={productsFiltered} />
    </div>
  );
}
