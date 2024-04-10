export type ProductData = {
  id: string;
  category: string;
  name: string;
  priceValue: number;
  priceCurrency?: string;
  brand: string;
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
};

export type BrandData = {
  id: string;
  name: string;
};
