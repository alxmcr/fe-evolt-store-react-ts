import React from 'react';
import {
  FilterAction,
  FilterProductsCriterias,
} from '../../@reducers/filterProductsCriteriasReducer';
import { initialState } from './constants';

export const FilterCriteriasContext =
  React.createContext<FilterProductsCriterias>(initialState);
export const FilterCriteriasDispatchContext = React.createContext<
  React.Dispatch<FilterAction>
>(() => {});
