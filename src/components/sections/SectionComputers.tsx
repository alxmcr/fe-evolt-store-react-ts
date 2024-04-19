import React from 'react';
import { FilterCriteriasContext } from '../../@providers/FilterCriteriasProvider/FilterCriteriasContext';
import { ProductsContext } from '../../@providers/ProductsProvider/ProductsContext';
import { FilterProductsTagsContext } from '../../@providers/TagsFilterProvider/TagsFilterContext';
import { ProductData } from '../../@types/appTypes';
import { filterProductsByFilterCriterias } from '../../helpers/helpers-tags-filter';
import AsideProductsFilter from '../asides/AsideProductsFilter';
import BoxGridProducts from '../boxes/BoxGridProducts';

export default function SectionComputers() {
  const products = React.useContext(ProductsContext);
  const filterProductsCriterias = React.useContext(FilterCriteriasContext);
  const tagsFilters = React.useContext(FilterProductsTagsContext);
  const productsFiltered: ProductData[] = filterProductsByFilterCriterias(products, filterProductsCriterias);

  if (products?.length === 0) {
    return (
      <div className="flex h-[88vh] w-full flex-col items-center justify-center gap-3 bg-white">
        <h2 className="w-[90%] text-center text-[2rem]">Your tech store does not have products.</h2>
      </div>
    );
  }

  if (tagsFilters?.length > 0 && productsFiltered?.length === 0) {
    return (
      <div className="flex h-[88vh] w-full flex-col items-center justify-center gap-3 bg-white">
        <h2 className="w-[90%] text-center text-[2rem]">Filter returned not results.</h2>
        <button>Reset filter</button>
      </div>
    );
  }

  return (
    <section className="flex w-full flex-col gap-4">
      <h2 className="text-xl font-bold">Computers ({productsFiltered.length})</h2>
      <div className="lg:relative lg:flex lg:gap-4">
        <AsideProductsFilter />
        <BoxGridProducts />
      </div>
    </section>
  );
}
