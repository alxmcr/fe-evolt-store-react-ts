import { StorageData } from '../../@types/appTypes';
import FormFieldStorage from '../forms-formfields/FormFieldStorage';

type Props = {
  storages: StorageData[];
};

export default function FormFilterByStorages({ storages = [] }: Props) {
  return (
    <form className="flex flex-col gap-2">
      {storages.map((storage) => (
        <FormFieldStorage
          key={storage.id}
          htmlFor={`storage-${storage.id}`}
          labelText={storage.capacity}
        />
      ))}
    </form>
  );
}
