export type ProductData = {
  id: string;
  category: string;
  name: string;
  priceValue: number;
  priceCurrency?: string;
  operatingSystem: string;
  color: string;
  model: string;
  SKU: string;
  memory: string;
  yearRelease?: number;
  photoUrl?: string;
  photoSource: string;
  photoFilename: string;
  photoAlt: string;
  screenSize: string;
  brand: BrandData;
  bluetooth: BluetoothData;
  storage: StorageData;
};

export type BrandData = {
  id: string;
  name: string;
};

export type StorageData = {
  id: string;
  capacity: string;
};

export type BluetoothData = {
  id: string;
  version: string;
};
