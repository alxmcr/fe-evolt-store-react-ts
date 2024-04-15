import { ProductData } from '../@types/appTypes';

export const findProductCheapest = (products: ProductData[] = []) => {
  if (products.length === 0) return null;

  return products.reduce((possibleCheapestProduct: ProductData | null, currentProduct) => {
    if (possibleCheapestProduct !== null && possibleCheapestProduct.priceValue < currentProduct.priceValue) {
      return possibleCheapestProduct;
    }

    return currentProduct;
  }, null);
};

export const findProductMostExpensive = (products: ProductData[] = []) => {
  if (products.length === 0) return null;

  return products.reduce((possibleMostExpensiveProduct: ProductData | null, currentProduct) => {
    if (
      possibleMostExpensiveProduct !== null &&
      possibleMostExpensiveProduct.priceValue > currentProduct.priceValue
    ) {
      return possibleMostExpensiveProduct;
    }

    return currentProduct;
  }, null);
};
