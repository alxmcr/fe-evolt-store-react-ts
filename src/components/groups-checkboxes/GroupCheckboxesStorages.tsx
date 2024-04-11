import { StorageData } from '../../@types/appTypes';
import { TagFilter } from '../../@types/filterTypes';
import FormFieldStorage from '../forms-formfields/FormFieldStorage';

type Props = {
  storages: StorageData[];
  setStoragesSelected: React.Dispatch<React.SetStateAction<TagFilter[]>>;
};

export default function GroupCheckboxesStorages({
  storages = [],
  setStoragesSelected,
}: Props) {
  return (
    <div>
      {storages.map((storage) => (
        <FormFieldStorage
          key={storage.id}
          htmlFor={`storage-${storage.id}`}
          labelText={storage.capacity}
          inputId={`storage-${storage.id}`}
          inputName="storage"
          setStoragesSelected={setStoragesSelected}
        />
      ))}
    </div>
  );
}
