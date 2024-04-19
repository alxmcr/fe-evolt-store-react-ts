import React from 'react';
import { FilterCriteriasDispatchContext } from '../../@providers/FilterCriteriasProvider/FilterCriteriasContext';
import {
  FilterProductsTagsContext,
  FilterProductsTagsDispatchContext,
} from '../../@providers/TagsFilterProvider/TagsFilterContext';
import { ProductData } from '../../@types/appTypes';
import Icon200x200BugGameIcon from '../@icons/200x200/Icon200x200BugGameIcon';
import GridProducts from '../grids/GridProducts';
import BoxFilterActions from './BoxFilterActions';

type Props = {
  productsFiltered: ProductData[];
};

export default function BoxGridProducts({ productsFiltered = [] }: Props) {
  const tagsFilter = React.useContext(FilterProductsTagsContext);

  const dipatchFilterCriterias = React.useContext(FilterCriteriasDispatchContext);
  const dispatchTagsFilter = React.useContext(FilterProductsTagsDispatchContext);

  const resetFilter = () => {
    console.log('reset tags...');
    // Reset filter criterias
    dipatchFilterCriterias({ type: 'reset_filter_criterias' });

    // Reset tags
    dispatchTagsFilter({ type: 'reset_tags_filter' });
  };

  if (tagsFilter?.length > 0 && productsFiltered?.length === 0) {
    return (
      <div className="flex w-full flex-col gap-4 lg:w-4/6">
        {tagsFilter.length > 0 ? <BoxFilterActions /> : null}
        <section className="flex w-full flex-col gap-4">
          <div className="flex h-[88vh] w-full flex-col items-center justify-center gap-3 bg-white">
            <span className="text-perano-600">
              <Icon200x200BugGameIcon />
            </span>
            <h2 className="w-[90%] text-center text-[2rem]">Filter returned not results.</h2>
            <button
              className="flex min-h-10 w-[200px] items-center justify-center gap-2 rounded-lg border border-perano-800 px-3 py-4 text-[1.5rem] text-perano-800 md:hover:border-[#6691FF] md:hover:bg-[#6691FF] md:hover:text-light-50"
              onClick={resetFilter}
            >
              Reset filter
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-4 lg:w-4/6">
      {tagsFilter.length > 0 ? <BoxFilterActions /> : null}
      <GridProducts products={productsFiltered} />
    </div>
  );
}
