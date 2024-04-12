import React from 'react';
import { ProductFilterCriteriasContext } from './ProductFilterCriteriasContext';
import { TagFilter } from '../../@types/filterTypes';
import { ProductFilterCriteriasContextData } from '../../@types/providerTypes';

type Props = {
  children: React.ReactNode;
};

export default function ProductFilterCriteriasProvider({ children }: Props) {
  const minValue = 1;
  const maxValue = 1100;
  const startMinValue = Math.floor(maxValue / 4);
  const startMaxValue = Math.floor(maxValue / 2);
  const [minPrice, setMinPrice] = React.useState(startMinValue);
  const [maxPrice, setMaxPrice] = React.useState(startMaxValue);
  const [brandsSelected, setBrandsSelected] = React.useState<TagFilter[]>([]);
  const [bluetoothsSelected, setBluetoothsSelected] = React.useState<
    TagFilter[]
  >([]);
  const [storagesSelected, setStoragesSelected] = React.useState<TagFilter[]>(
    [],
  );

  const value: ProductFilterCriteriasContextData = {
    minValue,
    maxValue,
    minPrice,
    maxPrice,
    brandsSelected,
    bluetoothsSelected,
    storagesSelected,
    setMinPrice,
    setMaxPrice,
    setBrandsSelected,
    setBluetoothsSelected,
    setStoragesSelected,
  };

  return (
    <ProductFilterCriteriasContext.Provider value={value}>
      {children}
    </ProductFilterCriteriasContext.Provider>
  );
}
