import { StorageData } from '../@types/appTypes';

export const storage128GB: StorageData = {
  id: 'storage0001',
  capacity: '128GB SSD + 128GB Micro SD',
};
export const storage256GB: StorageData = {
  id: 'storage0002',
  capacity: '256GB SSD',
};

export const storage512GB: StorageData = {
  id: 'storage0003',
  capacity: '512GB SSD',
};

export const storage1TB: StorageData = {
  id: 'storage0004',
  capacity: '1TB SSD',
};
export const storage2TB: StorageData = {
  id: 'storage0005',
  capacity: '2TB SSD',
};

export const MOCK_STORAGES: StorageData[] = [
  storage128GB,
  storage256GB,
  storage512GB,
  storage1TB,
  storage2TB,
];
