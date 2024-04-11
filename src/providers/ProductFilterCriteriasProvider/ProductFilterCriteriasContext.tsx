import React from 'react';
import { ProductFilterCriteriasContextData } from '../../@types/providerTypes';

const initialData: ProductFilterCriteriasContextData = {
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
};

export const ProductFilterCriteriasContext = React.createContext(initialData);
