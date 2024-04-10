import React from 'react';
import { ProductFilterContext } from './ProductFilterContext';
import { ProductFilterContextData } from '../../@types/providerTypes';

type Props = {
  children: React.ReactNode;
};

export default function ProductFilterProvider({ children }: Props) {
  const [filterPriceMin, setFilterPriceMin] = React.useState(0);
  const [filterPriceMax, setFilterPriceMax] = React.useState(0);
  const [filterBrand, setFilterBrand] = React.useState('');
  const [filterStorage, setFilterStorage] = React.useState('');
  const [filterBluetoothVersion, setFilterBluetoothVersion] =
    React.useState('');

  const value: ProductFilterContextData = {
    filterPriceMin,
    setFilterPriceMin,
    filterPriceMax,
    setFilterPriceMax,
    filterBrand,
    setFilterBrand,
    filterStorage,
    setFilterStorage,
    filterBluetoothVersion,
    setFilterBluetoothVersion,
  };

  return (
    <ProductFilterContext.Provider value={value}>
      {children}
    </ProductFilterContext.Provider>
  );
}
