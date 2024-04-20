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

export const createNewRange = (
  minPrice: number = 0,
  maxPrice: number = 0,
  percentage: number = 0.2,
): [number, number] => {
  const newMin = minPrice + (maxPrice - minPrice) * percentage;
  const newMax = minPrice + (maxPrice - minPrice) * (1 - percentage);

  // Ensure new range stays within existing range
  return [Math.max(newMin, minPrice), Math.min(newMax, maxPrice)];
};
