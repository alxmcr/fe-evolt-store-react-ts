import React from 'react';
import { BluetoothData } from '../../@types/appTypes';
import { TagFilter } from '../../@types/filterTypes';
import FormFieldBluetoothCheckbox from '../forms-formfields/FormFieldBluetoothCheckbox';

type Props = {
  bluetooths: BluetoothData[];
  setBluetoothsSelected: React.Dispatch<React.SetStateAction<TagFilter[]>>;
};

export default function GroupCheckboxesBluetooths({
  bluetooths = [],
  setBluetoothsSelected,
}: Props) {
  return (
    <div>
      {bluetooths.map((bluetooth) => (
        <FormFieldBluetoothCheckbox
          key={bluetooth.id}
          htmlFor={`bluetooth-${bluetooth.id}`}
          labelText={String(bluetooth.version)}
          inputId={`bluetooth-${bluetooth.id}`}
          inputName="bluetooth"
          setBluetoothsSelected={setBluetoothsSelected}
        />
      ))}
    </div>
  );
}
