import { ProductData } from '../@types/appTypes';

export const findProductCheapest = (products: ProductData[] = []) => {
  if (products.length === 0) return null;

  return products.reduce((possibleCheapestProduct: ProductData | null, currentProduct) => {
    if (possibleCheapestProduct !== null && currentProduct.priceValue < possibleCheapestProduct.priceValue) {
      return possibleCheapestProduct;
    }

    return currentProduct;
  }, null);
};
