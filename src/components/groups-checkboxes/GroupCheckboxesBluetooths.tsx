import { BluetoothData } from '../../@types/appTypes';

type Props = {
  bluetooths: BluetoothData[];
};

export default function GroupCheckboxesBluetooths({ bluetooths = [] }: Props) {
  console.log("🚀 ~ GroupCheckboxesBluetooths ~ bluetooths:", bluetooths)

  return null

  /*
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
  */
}
