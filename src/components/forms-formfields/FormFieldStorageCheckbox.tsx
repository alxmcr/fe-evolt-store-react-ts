import React from 'react';
import { FilterCriteriasDispatchContext } from '../../@providers/FilterCriteriasProvider/FilterCriteriasContext';
import { FilterStorageData, TagFilterProduct } from '../../@types/filterTypes';
import { FilterProductsTagsDispatchContext } from '../../@providers/TagsFilterProvider/TagsFilterContext';

type Props = {
  storage: FilterStorageData;
};

export default function FormFieldStorageCheckbox({ storage }: Props) {
  const dispatch = React.useContext(FilterCriteriasDispatchContext);
  const dispatchTagsFilter = React.useContext(FilterProductsTagsDispatchContext);

  const onChangeCheckbox = (ev: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'checked_storage',
      payload: {
        id: storage.id,
        checked: ev.target.checked,
      },
    });

    // tag
    const tag: TagFilterProduct = {
      id: `tag-brand-${storage.id}`,
      category: 'storage',
      valueText: storage.capacity,
      valueId: storage.id,
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
    <label htmlFor={storage.id} className={`flex items-center gap-x-2 text-lg`}>
      <input
        type="checkbox"
        name="bluetooth"
        id={storage.id}
        className="peer/draft hidden size-10"
        onChange={onChangeCheckbox}
        checked={storage.checked}
      />
      <span
        className="flex items-center gap-2 before:flex before:size-5 before:items-center before:justify-center before:rounded-full before:border before:border-solid before:border-perano-500 before:content-[''] peer-checked/draft:text-perano-500  peer-checked/draft:before:bg-perano-500
          peer-checked/draft:before:bg-[url(/icons/16x16/Icon16x16Check.svg)] peer-checked/draft:before:bg-center peer-checked/draft:before:bg-no-repeat"
      >
        {storage.capacity}
      </span>
    </label>
  );
}
