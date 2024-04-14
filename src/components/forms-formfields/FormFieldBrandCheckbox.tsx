import React from 'react';
import { FilterCriteriasDispatchContext } from '../../@providers/FilterCriteriasProvider/FilterCriteriasContext';
import { FilterBrandData } from '../../@types/filterTypes';

type Props = {
  brand: FilterBrandData;
};

export default function FormFieldBrandCheckbox({ brand }: Props) {
  console.log('🚀 ~ FormFieldBrandCheckbox ~ brand:', brand);
  const dispatch = React.useContext(FilterCriteriasDispatchContext);
  const [checked, setChecked] = React.useState(false);

  const onChangeCheckbox = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(ev.target.checked);

    dispatch({
      type: 'checked_brand',
      payload: {
        id: brand.id,
        checked: ev.target.checked,
      },
    });
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
        peer-checked/draft:before:bg-[url(icons/16x16/Icon16x16Check.svg)] peer-checked/draft:before:bg-center peer-checked/draft:before:bg-no-repeat"
      >
        {brand.name}
      </span>
    </label>
  );
}
