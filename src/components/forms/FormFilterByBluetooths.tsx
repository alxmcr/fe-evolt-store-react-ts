import { BluetoothData } from '../../@types/appTypes';
import FormFieldBrand from '../forms-formfields/FormFieldBrand';

type Props = {
  bluetooths: BluetoothData[];
};

export default function FormFilterByBluetooths({ bluetooths = [] }: Props) {
  return (
    <form className="flex flex-col gap-2">
      {bluetooths.map((bluetooth) => (
        <FormFieldBrand
          key={bluetooth.id}
          htmlFor={`brand-${bluetooth.id}`}
          labelText={String(bluetooth.version)}
        />
      ))}
    </form>
  );
}
