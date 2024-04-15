import React from 'react';
import {
  initialFilterProductsCriterias,
  initialFilterProductsTags,
} from '../../helpers/constants-providers';
import { FilterAction, FilterProductsCriterias } from '../../@types/reducerTypes';

export const FilterCriteriasContext = React.createContext<FilterProductsCriterias>(
  initialFilterProductsCriterias,
);

export const FilterProductsTagsContext = React.createContext(initialFilterProductsTags);

export const FilterCriteriasDispatchContext = React.createContext<React.Dispatch<FilterAction>>(
  () => {},
);
