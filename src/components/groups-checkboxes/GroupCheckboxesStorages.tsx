import { FilterStorageData } from '../../@types/filterTypes';
import FormFieldStorageCheckbox from '../forms-formfields/FormFieldStorageCheckbox';

type Props = {
  storages: FilterStorageData[];
};

export default function GroupCheckboxesStorages({ storages = [] }: Props) {
  return (
    <div>
      {storages.map((storage) => (
        <FormFieldStorageCheckbox key={storage.id} storage={storage} />
      ))}
    </div>
  );
}
