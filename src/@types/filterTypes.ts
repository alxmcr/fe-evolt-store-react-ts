export type FilterProductTag = {
  id: string;
  key: string;
  value: string;
  typeValue: 'string' | 'number';
};

export type FilterBrandData = {
  id: string;
  name: string;
  checked: boolean;
};

export type FilterStorageData = {
  id: string;
  capacity: string;
  checked: boolean;
};

export type FilterBluetoothData = {
  id: string;
  version: string;
  checked: boolean;
};
