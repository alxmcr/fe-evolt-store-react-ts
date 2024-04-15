import React from 'react';
import { FilterProductTag, TagFilterAction } from '../../@types/filterTypes';

export const FilterProductsTagsContext = React.createContext<FilterProductTag[]>([]);
export const FilterProductsTagsDispatchContext = React.createContext<
  React.Dispatch<TagFilterAction>
>(() => {});
