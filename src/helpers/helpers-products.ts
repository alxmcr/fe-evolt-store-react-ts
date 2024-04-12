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
  const brandsSet = new Set(products.map((product) => product.brand));

  return Array.from(brandsSet);
};

export const findAllStorages = (products: ProductData[] = []) => {
  const storagesSet = new Set(products.map((product) => product.storage));

  return Array.from(storagesSet);
};

export const findAllBluetooths = (products: ProductData[] = []) => {
  const bluetoothsSet = new Set(
    products.map((product) => product.bluetooth),
  );

  return Array.from(bluetoothsSet);
};
