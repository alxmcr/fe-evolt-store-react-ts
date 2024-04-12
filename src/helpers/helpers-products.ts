import { ProductData } from '../@types/appTypes';

export const getMinPricePossible = (products: ProductData[] = []) => {
  return products.reduce((minPrice, product) => {
    if (product.priceValue !== 0 && product.priceValue < minPrice) {
      return product.priceValue;
    }
    return minPrice;
  }, Infinity);
};

export const getMaxPricePossible = (products: ProductData[] = []) => {
  return products.reduce(
    (acc, product) => Math.max(acc, product.priceValue),
    0,
  );
};

export const findAllBrands = (products: ProductData[] = []) => {
  const brands = products.map((product) => product.brand);

  return brands;
};

export const findAllStorages = (products: ProductData[] = []) => {
  const storages = products.map((product) => product.storage);

  return storages;
};

export const findAllBluetooths = (products: ProductData[] = []) => {
  const bluetooths = products.map((product) => product.bluetoothVersion);

  return bluetooths;
};
