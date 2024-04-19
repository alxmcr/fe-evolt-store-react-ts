import React from 'react';
import { FilterCriteriasContext } from '../../@providers/FilterCriteriasProvider/FilterCriteriasContext';
import { ProductsContext } from '../../@providers/ProductsProvider/ProductsContext';
import { ProductData } from '../../@types/appTypes';
import { applyFilterCriterias } from '../../helpers/helpers-tags-filter';
import Icon200x200BugGameIcon from '../@icons/200x200/Icon200x200BugGameIcon';
import AsideProductsFilter from '../asides/AsideProductsFilter';
import BoxGridProducts from '../boxes/BoxGridProducts';

export default function SectionComputers() {
  const products = React.useContext(ProductsContext);
  const filterProductsCriterias = React.useContext(FilterCriteriasContext);
  // apply filter
  const productsFiltered: ProductData[] = applyFilterCriterias(products, filterProductsCriterias);

  if (products?.length === 0) {
    return (
      <section className="flex w-full flex-col gap-4">
        <div className="flex h-[88vh] w-full flex-col items-center justify-center gap-3 bg-white">
          <Icon200x200BugGameIcon />
          <h2 className="w-[90%] text-center text-[2rem]">Your tech store does not have products.</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="flex w-full flex-col gap-4">
      <h2 className="text-xl font-bold">Products ({productsFiltered.length})</h2>
      <div className="lg:relative lg:flex lg:gap-4">
        <AsideProductsFilter />
        <BoxGridProducts productsFiltered={productsFiltered} />
      </div>
    </section>
  );
}
