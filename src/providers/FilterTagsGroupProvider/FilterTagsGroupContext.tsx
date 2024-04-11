import React from 'react';
import { FilterTagsGroupContextData } from '../../@types/providerTypes';

const initialState: FilterTagsGroupContextData = {
  filterTags: [],
  setFilterTags: () => {},
};

export const FilterTagsGroupContext = React.createContext(initialState);
