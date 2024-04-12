import React from 'react';
import { ProductFilterCriteriasContextData } from '../../@types/providerTypes';

const initialData: ProductFilterCriteriasContextData = {
  minValueInput: 0,
  maxValueInput: 0,
  minPrice: 0,
  maxPrice: 0,
  brandsSelected: [],
  bluetoothsSelected: [],
  storagesSelected: [],
  setMinPrice: () => {},
  setMaxPrice: () => {},
  setBrandsSelected: () => {},
  setBluetoothsSelected: () => {},
  setStoragesSelected: () => {},
  tagsFilter: [],
  setTagsFilter: () => {},
};

export const ProductFilterCriteriasContext = React.createContext(initialData);
