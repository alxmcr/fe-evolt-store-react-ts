import React from 'react';
import { BluetoothData } from '../../@types/appTypes';
import { TagFilter } from '../../@types/filterTypes';
import FormFieldBluetooth from '../forms-formfields/FormFieldBluetooth';

type Props = {
  bluetooths: BluetoothData[];
};

export default function FormFilterByBluetooths({ bluetooths = [] }: Props) {
  const [bluetoothsSelected, setBluetoothsSelected] = React.useState<
    TagFilter[]
  >([]);

  return (
    <form className="flex flex-col gap-2">
      {bluetooths.map((bluetooth) => (
        <FormFieldBluetooth
          key={bluetooth.id}
          htmlFor={`bluetooth-${bluetooth.id}`}
          labelText={String(bluetooth.version)}
          inputId={`bluetooth-${bluetooth.id}`}
          inputName="bluetooth"
          setBluetoothsSelected={setBluetoothsSelected}
        />
      ))}
      {bluetooths.length > 0 ? (
        <pre>{JSON.stringify(bluetoothsSelected, null, 2)}</pre>
      ) : null}
    </form>
  );
}
