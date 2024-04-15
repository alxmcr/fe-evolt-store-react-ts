import React from 'react';
import { FilterCriteriasDispatchContext } from '../../@providers/FilterCriteriasProvider/FilterCriteriasContext';
import { FilterProductsTagsDispatchContext } from '../../@providers/TagsFilterProvider/TagsFilterContext';
import { FilterBluetoothData, TagFilterProduct } from '../../@types/filterTypes';

type Props = {
  bluetooth: FilterBluetoothData;
};

export default function FormFieldBluetoothCheckbox({ bluetooth }: Props) {
  const dispatch = React.useContext(FilterCriteriasDispatchContext);
  const dispatchTagsFilter = React.useContext(FilterProductsTagsDispatchContext);

  const onChangeCheckbox = (ev: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'checked_bluetooth',
      payload: {
        id: bluetooth.id,
        checked: ev.target.checked,
      },
    });

    // tag
    const tag: TagFilterProduct = {
      id: `tag-bluetooth-${bluetooth.id}`,
      category: 'bluetooth',
      valueText: bluetooth.version,
      valueId: bluetooth.id,
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
    <label htmlFor={bluetooth.id} className={`flex items-center gap-x-2 text-lg`}>
      <input
        type="checkbox"
        name="bluetooth"
        id={bluetooth.id}
        className="peer/draft hidden size-10"
        onChange={onChangeCheckbox}
        checked={bluetooth.checked}
      />
      <span
        className="flex items-center gap-2 before:flex before:size-5 before:items-center before:justify-center before:rounded-full before:border before:border-solid before:border-perano-500 before:content-[''] peer-checked/draft:text-perano-500  peer-checked/draft:before:bg-perano-500
          peer-checked/draft:before:bg-[url(/icons/16x16/Icon16x16Check.svg)] peer-checked/draft:before:bg-center peer-checked/draft:before:bg-no-repeat"
      >
        {bluetooth.version}
      </span>
    </label>
  );
}
