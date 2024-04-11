import { BluetoothData } from '../../@types/appTypes';
import FormFieldBluetooth from '../forms-formfields/FormFieldBluetooth';

type Props = {
  bluetooths: BluetoothData[];
};

export default function FormFilterByBluetooths({ bluetooths = [] }: Props) {
  return (
    <form className="flex flex-col gap-2">
      {bluetooths.map((bluetooth) => (
        <FormFieldBluetooth
          key={bluetooth.id}
          htmlFor={`brand-${bluetooth.id}`}
          labelText={String(bluetooth.version)}
          inputId={`brand-${bluetooth.id}`}
          inputName="brand"
        />
      ))}
    </form>
  );
}
