import React from 'react';
import { FilterCriteriasDispatchContext } from '../../@providers/FilterCriteriasProvider/FilterCriteriasContext';
import { FilterProductsTagsDispatchContext } from '../../@providers/TagsFilterProvider/TagsFilterContext';
import { FilterBrandData, TagFilterProduct } from '../../@types/filterTypes';

type Props = {
  brand: FilterBrandData;
};

export default function FormFieldBrandCheckbox({ brand }: Props) {
  const dispatch = React.useContext(FilterCriteriasDispatchContext);
  const dispatchTagsFilter = React.useContext(FilterProductsTagsDispatchContext);

  const onChangeCheckbox = (ev: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'checked_brand',
      payload: {
        id: brand.id,
        checked: ev.target.checked,
      },
    });

    // tag
    const tag: TagFilterProduct = {
      id: `tag-brand-${brand.id}`,
      category: 'brand',
      valueText: brand.name,
      valueId: brand.id,
    };
    if (ev.target.checked) {
      dispatchTagsFilter({
        type: 'added_tag_filter',
        payload: tag,
      });
    } else {
      dispatchTagsFilter({
        type: 'deleted_tag_filter',
        payload: {
          id: tag.id,
        },
      });
    }
  };

  return (
    <label htmlFor={brand.id} className={`flex items-center gap-x-2 text-lg`}>
      <input
        type="checkbox"
        name="brand"
        id={brand.id}
        className="peer/draft hidden size-10"
        onChange={onChangeCheckbox}
        checked={brand.checked}
      />
      <span
        className="flex items-center gap-2 before:flex before:size-5 before:items-center before:justify-center before:rounded-full before:border before:border-solid before:border-perano-500 before:content-[''] peer-checked/draft:text-perano-500  peer-checked/draft:before:bg-perano-500
        peer-checked/draft:before:bg-[url(/icons/16x16/Icon16x16Check.svg)] peer-checked/draft:before:bg-center peer-checked/draft:before:bg-no-repeat"
      >
        {brand.name}
      </span>
    </label>
  );
}
