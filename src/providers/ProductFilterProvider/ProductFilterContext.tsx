import React from 'react';
import { ProductFilterContextData } from '../../@types/providerTypes';

const initialFilterData: ProductFilterContextData = {
  filterPriceMin: 0,
  setFilterPriceMin: () => {},
  filterPriceMax: 0,
  setFilterPriceMax: () => {},
  filterBrand: '',
  setFilterBrand: () => {},
  filterStorage: '',
  setFilterStorage: () => {},
  filterBluetoothVersion: '',
  setFilterBluetoothVersion: () => {},
};

export const ProductFilterContext = React.createContext(initialFilterData);
