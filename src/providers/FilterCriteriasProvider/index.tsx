import React from 'react';
import filterProductsCriteriasReducer from '../../@reducers/filterProductsCriteriasReducer';
import { initialState } from './constants';
import {
  FilterCriteriasContext,
  FilterCriteriasDispatchContext,
} from './FilterCriteriasContext';

type Props = {
  children: React.ReactNode;
};

export default function FilterCriteriasProvider({ children }: Props) {
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
