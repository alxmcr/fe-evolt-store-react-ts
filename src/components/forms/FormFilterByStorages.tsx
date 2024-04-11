import React from 'react';
import { StorageData } from '../../@types/appTypes';
import { TagFilter } from '../../@types/filterTypes';
import FormFieldStorage from '../forms-formfields/FormFieldStorage';

type Props = {
  storages: StorageData[];
};

export default function FormFilterByStorages({ storages = [] }: Props) {
  const [storagesSelected, setStoragesSelected] = React.useState<TagFilter[]>(
    [],
  );

  return (
    <form className="flex flex-col gap-2">
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
      {storagesSelected.length > 0 ? (
        <pre>{JSON.stringify(storagesSelected, null, 2)}</pre>
      ) : null}
    </form>
  );
}
