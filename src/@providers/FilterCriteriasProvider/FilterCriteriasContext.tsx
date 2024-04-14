import React from 'react';
import {
  FilterAction,
  FilterProductsCriterias,
} from '../../@reducers/filterProductsCriteriasReducer';
import { initialFilterProductsCriterias } from '../../helpers/constants-providers';

export const FilterCriteriasContext = React.createContext<FilterProductsCriterias>(
  initialFilterProductsCriterias,
);
export const FilterCriteriasDispatchContext = React.createContext<React.Dispatch<FilterAction>>(
  () => {},
);
