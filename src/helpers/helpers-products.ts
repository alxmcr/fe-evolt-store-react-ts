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
  return products.map((product) => product.brand);
};

export const findAllStorages = (products: ProductData[] = []) => {
  return products.map((product) => product.storage);
};

export const findAllBluetooths = (products: ProductData[] = []) => {
  return products.map((product) => product.bluetoothVersion);
};
