import { StorageData } from '../../@types/appTypes';
import FormFieldStorageCheckbox from '../forms-formfields/FormFieldStorageCheckbox';

type Props = {
  storages: StorageData[];
};

export default function GroupCheckboxesStorages({ storages = [] }: Props) {
  return (
    <div>
      {storages.map((storage) => (
        <FormFieldStorageCheckbox
          key={storage.id}
          htmlFor={`storage-${storage.id}`}
          labelText={storage.capacity}
          inputId={`storage-${storage.id}`}
          inputName="storage"
        />
      ))}
    </div>
  );
}
