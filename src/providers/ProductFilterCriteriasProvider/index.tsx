import React from 'react';
import { LoadingStates } from '../../@enums/appEnums';
import {
  ProductData
} from '../../@types/appTypes';
import { FilterProductTag } from '../../@types/filterTypes';
import { ProductFilterCriteriasContextData } from '../../@types/providerTypes';
import { ProductsContext } from '../ProductsProvider/ProductsContext';
import { ProductFilterCriteriasContext } from './ProductFilterCriteriasContext';

type Props = {
  children: React.ReactNode;
};

export default function ProductFilterCriteriasProvider({ children }: Props) {
  const contextProducts = React.useContext(ProductsContext);
  const [productsFiltered, setProductsFiltered] = React.useState<ProductData[]>(
    [],
  );

  const minValueInput = 1;
  const maxValueInput = 1100;
  const startminValueInput = Math.floor(maxValueInput / 4);
  const startmaxValueInput = Math.floor(maxValueInput / 2);
  const [minPrice, setMinPrice] = React.useState(startminValueInput);
  const [maxPrice, setMaxPrice] = React.useState(startmaxValueInput);
  const [tagsFilter, setTagsFilter] = React.useState<FilterProductTag[]>([]);

  const value: ProductFilterCriteriasContextData = {
    productsFiltered,
    setProductsFiltered,
    minValueInput,
    maxValueInput,
    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice,
    tagsFilter,
    setTagsFilter,
  };

  React.useEffect(() => {
    if (LoadingStates.SUCCESS === contextProducts.statusProducts) {
      setProductsFiltered(contextProducts.products);
    }
  }, [contextProducts]);

  return (
    <ProductFilterCriteriasContext.Provider value={value}>
      {children}
    </ProductFilterCriteriasContext.Provider>
  );
}
