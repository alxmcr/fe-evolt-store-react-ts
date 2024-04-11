import React from 'react';
import { FilterTagsGroupContext } from './FilterTagsGroupContext';
import { FilterTagsGroupContextData } from '../../@types/providerTypes';
import { FilterProductTag } from '../../@types/appTypes';

type Props = {
  children: React.ReactNode;
};

export default function FilterTagsGroupProvider({ children }: Props) {
  const [filterTags, setFilterTags] = React.useState<FilterProductTag[]>([]);

  const value: FilterTagsGroupContextData = {
    filterTags,
    setFilterTags,
  };

  return (
    <FilterTagsGroupContext.Provider value={value}>
      {children}
    </FilterTagsGroupContext.Provider>
  );
}
