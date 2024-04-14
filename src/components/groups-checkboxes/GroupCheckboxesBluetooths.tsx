import { FilterBluetoothData } from '../../@types/filterTypes';
import FormFieldBluetoothCheckbox from '../forms-formfields/FormFieldBluetoothCheckbox';

type Props = {
  bluetooths: FilterBluetoothData[];
};

export default function GroupCheckboxesBluetooths({ bluetooths = [] }: Props) {
  return (
    <div>
      {bluetooths.map((bluetooth) => (
        <FormFieldBluetoothCheckbox
          key={bluetooth.id}
          htmlFor={`${bluetooth.id}`}
          labelText={String(bluetooth.version)}
          inputId={`${bluetooth.id}`}
          inputName="bluetooth"
        />
      ))}
    </div>
  );
}
