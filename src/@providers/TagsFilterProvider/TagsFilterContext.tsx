import React from 'react';
import { TagFilterProduct, TagsFilterAction } from '../../@types/filterTypes';

export const FilterProductsTagsContext = React.createContext<TagFilterProduct[]>([]);
export const FilterProductsTagsDispatchContext = React.createContext<
  React.Dispatch<TagsFilterAction>
>(() => {});
