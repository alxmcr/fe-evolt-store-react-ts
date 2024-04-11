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
          inputId={`bluetooth-${bluetooth.id}`}
          labelText={String(bluetooth.version)}
        />
      ))}
    </form>
  );
}
