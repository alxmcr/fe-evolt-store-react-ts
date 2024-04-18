import React from 'react';
import { FilterCriteriasContext } from '../../@providers/FilterCriteriasProvider/FilterCriteriasContext';
import { ProductData } from '../../@types/appTypes';
import CardProduct from '../cards/CardProduct';

type Props = {
  products: ProductData[];
};

export default function GridProducts({ products = [] }: Props) {
  const filterProductsCriterias = React.useContext(FilterCriteriasContext);
  console.log("🚀 ~ GridProducts ~ filterProductsCriterias:", filterProductsCriterias)
  /*
  const productFiltered = filterProductsByFilterCriterias(products, filterProductsCriterias);
  console.log('🚀 ~ GridProducts ~ productFiltered:', productFiltered);
  */

  if (products.length === 0) {
    return (
      <div>
        <h2>No products</h2>
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
