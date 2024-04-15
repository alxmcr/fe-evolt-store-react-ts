import React from 'react';
import { TagFilterProduct, TagFilterAction } from '../../@types/filterTypes';

export const FilterProductsTagsContext = React.createContext<TagFilterProduct[]>([]);
export const FilterProductsTagsDispatchContext = React.createContext<
  React.Dispatch<TagFilterAction>
>(() => {});
