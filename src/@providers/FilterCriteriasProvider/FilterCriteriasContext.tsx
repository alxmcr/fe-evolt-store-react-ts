import React from 'react';
import { FilterCriteriasAction, FilterProductsCriterias } from '../../@types/reducerTypes';
import {
  initialFilterProductsCriterias
} from '../../helpers/constants-providers';

export const FilterCriteriasContext = React.createContext<FilterProductsCriterias>(
  initialFilterProductsCriterias,
);

export const FilterCriteriasDispatchContext = React.createContext<React.Dispatch<FilterCriteriasAction>>(
  () => {},
);
