import React from 'react';
import { LoadingStates } from '../../@enums/appEnums';
import { ProductData } from '../../@types/appTypes';
import {
  FilterBluetoothData,
  FilterBrandData,
  FilterProductTag,
  FilterStorageData,
} from '../../@types/filterTypes';
import { ProductFilterCriteriasContextData } from '../../@types/providerTypes';
import { ProductsContext } from '../ProductsProvider/ProductsContext';
import { ProductFilterCriteriasContext } from './ProductFilterCriteriasContext';
import {
  findAllFilterBluetooths,
  findAllFilterBrands,
  findAllFilterStorages,
} from '../../helpers/helpers-products-filter';

type Props = {
  children: React.ReactNode;
};

export default function ProductFilterCriteriasProvider({ children }: Props) {
  const contextProducts = React.useContext(ProductsContext);
  const [productsFiltered, setProductsFiltered] = React.useState<ProductData[]>(
    [],
  );
  const [brands, setBrands] = React.useState<FilterBrandData[]>([]);
  const [storages, setStorages] = React.useState<FilterStorageData[]>([]);
  const [bluetooths, setBluetooths] = React.useState<FilterBluetoothData[]>([]);

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
    brands,
    storages,
    bluetooths,
  };

  React.useEffect(() => {
    if (LoadingStates.SUCCESS === contextProducts.statusProducts) {
      setProductsFiltered(contextProducts.products);

      // Filter criterias
      const brands = findAllFilterBrands(contextProducts.products);
      const storages = findAllFilterStorages(contextProducts.products);
      const bluetooths = findAllFilterBluetooths(contextProducts.products);

      // Update states
      setBrands(brands);
      setStorages(storages);
      setBluetooths(bluetooths);
    }
  }, [contextProducts]);

  return (
    <ProductFilterCriteriasContext.Provider value={value}>
      {children}
    </ProductFilterCriteriasContext.Provider>
  );
}
