import React from 'react';
import { ProductFilterCriteriasContext } from './ProductFilterCriteriasContext';
import { FilterProductTag } from '../../@types/filterTypes';
import { ProductFilterCriteriasContextData } from '../../@types/providerTypes';

type Props = {
  children: React.ReactNode;
};

export default function ProductFilterCriteriasProvider({ children }: Props) {
  const minValueInput = 1;
  const maxValueInput = 1100;
  const startminValueInput = Math.floor(maxValueInput / 4);
  const startmaxValueInput = Math.floor(maxValueInput / 2);
  const [minPrice, setMinPrice] = React.useState(startminValueInput);
  const [maxPrice, setMaxPrice] = React.useState(startmaxValueInput);
  const [brandsSelected, setBrandsSelected] = React.useState<FilterProductTag[]>([]);
  const [bluetoothsSelected, setBluetoothsSelected] = React.useState<
    FilterProductTag[]
  >([]);
  const [storagesSelected, setStoragesSelected] = React.useState<FilterProductTag[]>(
    [],
  );
  const [tagsFilter, setTagsFilter] = React.useState<FilterProductTag[]>([]);

  const value: ProductFilterCriteriasContextData = {
    minValueInput,
    maxValueInput,
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
    tagsFilter,
    setTagsFilter,
  };

  return (
    <ProductFilterCriteriasContext.Provider value={value}>
      {children}
    </ProductFilterCriteriasContext.Provider>
  );
}
