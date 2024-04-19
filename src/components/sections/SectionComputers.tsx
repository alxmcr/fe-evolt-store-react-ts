import React from 'react';
import {
  FilterCriteriasContext,
  FilterCriteriasDispatchContext,
} from '../../@providers/FilterCriteriasProvider/FilterCriteriasContext';
import { ProductsContext } from '../../@providers/ProductsProvider/ProductsContext';
import {
  FilterProductsTagsContext,
  FilterProductsTagsDispatchContext,
} from '../../@providers/TagsFilterProvider/TagsFilterContext';
import { ProductData } from '../../@types/appTypes';
import { applyFilterCriterias } from '../../helpers/helpers-tags-filter';
import AsideProductsFilter from '../asides/AsideProductsFilter';
import BoxGridProducts from '../boxes/BoxGridProducts';

export default function SectionComputers() {
  const products = React.useContext(ProductsContext);
  const filterProductsCriterias = React.useContext(FilterCriteriasContext);
  const tagsFilters = React.useContext(FilterProductsTagsContext);
  const dipatchFilterCriterias = React.useContext(FilterCriteriasDispatchContext);
  const dispatchTagsFilter = React.useContext(FilterProductsTagsDispatchContext);

  // apply filter
  // const productsFiltered: ProductData[] = []
  const productsFiltered: ProductData[] = applyFilterCriterias(products, filterProductsCriterias);

  const resetFilter = () => {
    console.log('reset tags...');
    // Reset filter criterias
    dipatchFilterCriterias({ type: 'reset_filter_criterias' });

    // Reset tags
    dispatchTagsFilter({ type: 'reset_tags_filter' });
  };

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
        <button
          className="bg:text-white flex min-h-10 w-[200px] items-center justify-center gap-2 rounded-lg border border-perano-200 px-3 py-4 text-[1.5rem] md:hover:border-[#6691FF] md:hover:bg-[#6691FF] md:hover:text-light-50"
          onClick={resetFilter}
        >
          Reset filter
        </button>
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
