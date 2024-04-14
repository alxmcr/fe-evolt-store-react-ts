import { StorageData } from '../../@types/appTypes';

type Props = {
  storages: StorageData[];
};

export default function GroupCheckboxesStorages({ storages = [] }: Props) {
  console.log('🚀 ~ GroupCheckboxesStorages ~ storages:', storages);
  return null;

  /*
  return (
    <div>
      {storages.map((storage) => (
        <FormFieldStorageCheckbox
          key={storage.id}
          htmlFor={`${storage.id}`}
          labelText={storage.capacity}
          inputId={`${storage.id}`}
          inputName="storage"
        />
      ))}
    </div>
  );
  */
}
