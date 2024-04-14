import React from 'react';
import filterProductsCriteriasReducer from '../../@reducers/filterProductsCriteriasReducer';
import { initialState } from '../../helpers/constants-providers';
import {
  FilterCriteriasContext,
  FilterCriteriasDispatchContext,
} from './FilterCriteriasContext';

type Props = {
  children: React.ReactNode;
};

export default function FilterCriteriasProvider({ children }: Props) {
  // Get info products

  const [filterCriterias, dispatch] = React.useReducer(
    filterProductsCriteriasReducer,
    initialState,
  );

  return (
    <FilterCriteriasContext.Provider value={filterCriterias}>
      <FilterCriteriasDispatchContext.Provider value={dispatch}>
        {children}
      </FilterCriteriasDispatchContext.Provider>
    </FilterCriteriasContext.Provider>
  );
}
