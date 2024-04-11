import React from 'react';
import { TagFilter } from '../../@types/filterTypes';

type Props = {
  labelText: string;
  htmlFor: string;
  inputId: string;
  inputName: string;
  setBluetoothsSelected: React.Dispatch<React.SetStateAction<TagFilter[]>>;
};

export default function FormFieldBluetooth({
  labelText = '',
  htmlFor = '',
  inputId = '',
  inputName = '',
  setBluetoothsSelected,
}: Props) {
  const [checked, setChecked] = React.useState(false);

  const onChangeCheckbox = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(ev.target.checked);

    setBluetoothsSelected((prev) => {
      const tagId = `tag-${inputId}`;
      if (ev.target.checked) {
        const tag: TagFilter = {
          id: tagId,
          key: 'bluetooth',
          value: labelText,
          typeValue: 'string',
        };
        console.log("🚀 ~ setBluetoothsSelected ~ tag:", tag)
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
