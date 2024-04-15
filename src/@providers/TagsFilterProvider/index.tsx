import React from 'react';
import tagsFilterReducer from '../../@reducers/tagsFilterReducer';
import { initialFilterProductsTags } from '../../helpers/constants-providers';
import { FilterProductsTagsContext, FilterProductsTagsDispatchContext } from './TagsFilterContext';

type Props = {
  children: React.ReactNode;
};

export default function TagsFilterProvider({ children }: Props) {
  const [tagsFilter, dispatch] = React.useReducer(tagsFilterReducer, initialFilterProductsTags);

  return (
    <FilterProductsTagsContext.Provider value={tagsFilter}>
      <FilterProductsTagsDispatchContext.Provider value={dispatch}>
        {children}
      </FilterProductsTagsDispatchContext.Provider>
    </FilterProductsTagsContext.Provider>
  );
}
