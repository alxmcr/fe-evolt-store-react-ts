import React from 'react';
import { ProductFilterCriteriasContextData } from '../../@types/providerTypes';

const initialData: ProductFilterCriteriasContextData = {
  minValueInput: 0,
  maxValueInput: 0,
  minPrice: 0,
  maxPrice: 0,
  setMinPrice: () => {},
  setMaxPrice: () => {},
  tagsFilter: [],
  setTagsFilter: () => {},
  productsFiltered: [],
  setProductsFiltered: () => {},
  brands: [],
  storages: [],
  bluetooths: [],
};

export const ProductFilterCriteriasContext = React.createContext(initialData);
