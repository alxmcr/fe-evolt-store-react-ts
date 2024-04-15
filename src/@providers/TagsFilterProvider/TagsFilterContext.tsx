import React from 'react';
import { initialFilterProductsTags } from '../../helpers/constants-providers';
import { TagFilterAction } from '../../@types/filterTypes';

export const FilterProductsTagsContext = React.createContext(initialFilterProductsTags);
export const FilterProductsTagsDispatchContext = React.createContext<
  React.Dispatch<TagFilterAction>
>(() => {});
