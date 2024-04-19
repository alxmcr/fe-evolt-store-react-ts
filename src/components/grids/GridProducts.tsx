import React from 'react';
import { FilterCriteriasContext } from '../../@providers/FilterCriteriasProvider/FilterCriteriasContext';
import { ProductData } from '../../@types/appTypes';
import { filterProductsByFilterCriterias } from '../../helpers/helpers-tags-filter';
import CardProduct from '../cards/CardProduct';

type Props = {
  products: ProductData[];
};

export default function GridProducts({ products = [] }: Props) {
  const filterProductsCriterias = React.useContext(FilterCriteriasContext);
  const productFiltered = filterProductsByFilterCriterias(products, filterProductsCriterias);
  console.log('🚀 ~ GridProducts ~ productFiltered:', productFiltered);

  if (products?.length === 0) {
    return (
      <div className="flex h-[88vh] w-full flex-col items-center justify-center gap-3 bg-white">
        <h2 className="w-[90%] text-center text-[2rem]">No products</h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 md:grid md:grid-cols-3">
      {products.map((product) => (
        <CardProduct product={product} key={product.id} />
      ))}
    </div>
  );
}
