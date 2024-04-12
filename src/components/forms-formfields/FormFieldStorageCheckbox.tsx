import React from 'react';
import { TagFilter } from '../../@types/filterTypes';
import { ProductFilterCriteriasContext } from '../../providers/ProductFilterCriteriasProvider/ProductFilterCriteriasContext';

type Props = {
  labelText: string;
  htmlFor: string;
  inputId: string;
  inputName: string;
};

export default function FormFieldStorageCheckbox({
  labelText = '',
  htmlFor = '',
  inputId = '',
  inputName = '',
}: Props) {
  const contextProductFilterCriterias = React.useContext(
    ProductFilterCriteriasContext,
  );
  const [checked, setChecked] = React.useState(false);

  const onChangeCheckbox = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(ev.target.checked);

    contextProductFilterCriterias.setTagsFilter((prev) => {
      const tagId = `tag-${inputId}`;
      if (ev.target.checked) {
        const tag: TagFilter = {
          id: tagId,
          key: 'storage',
          value: labelText,
          typeValue: 'string',
        };
        return [...prev, tag];
      }
      return prev.filter((tag) => tag.id !== tagId);
    });
  };

  return (
    <label htmlFor={htmlFor} className={`flex items-center gap-x-2 text-lg`}>
      <input
        type="checkbox"
        name={inputName}
        id={inputId}
        className="peer/draft hidden size-10"
        onChange={onChangeCheckbox}
        checked={checked}
      />
      <span
        className="flex items-center gap-2 before:flex before:size-5 before:items-center before:justify-center before:rounded-full before:border before:border-solid before:border-perano-500 before:content-[''] peer-checked/draft:text-perano-500  peer-checked/draft:before:bg-perano-500
          peer-checked/draft:before:bg-[url(icons/16x16/Icon16x16Check.svg)] peer-checked/draft:before:bg-center peer-checked/draft:before:bg-no-repeat"
      >
        {labelText}
      </span>
    </label>
  );
}
