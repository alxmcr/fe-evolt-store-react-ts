import { StorageData } from '../@types/appTypes';

const storage001: StorageData = {
  id: 'storage0001',
  capacity: '128GB SSD + 128GB Micro SD',
};
const storage002: StorageData = {
  id: 'storage0002',
  capacity: '256GB SSD',
};

const storage003: StorageData = {
  id: 'storage0003',
  capacity: '512GB SSD',
};

const storage004: StorageData = {
  id: 'storage0004',
  capacity: '1TB SSD',
};
const storage005: StorageData = {
  id: 'storage0005',
  capacity: '2TB SSD',
};

export const MOCK_STORAGES: StorageData[] = [
  storage001,
  storage002,
  storage003,
  storage004,
  storage005,
];
