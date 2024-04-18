import React from 'react';
import { ProductData } from '../../@types/appTypes';
import { filterProductsByFilterCriterias } from '../../helpers/helpers-tags-filter';
import CardProduct from '../cards/CardProduct';
import { FilterCriteriasContext } from '../../@providers/FilterCriteriasProvider/FilterCriteriasContext';

type Props = {
  products: ProductData[];
};

export default function GridProducts({ products = [] }: Props) {
  const filterProductsCriterias = React.useContext(FilterCriteriasContext);

  console.log(filterProductsByFilterCriterias(products, filterProductsCriterias));

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
