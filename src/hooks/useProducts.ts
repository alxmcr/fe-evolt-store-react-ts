import React from 'react';
import { MOCK_DATA_COMPUTERS } from '../mocks/mock-products-computers-data';
import { ProductData } from '../@types/appTypes';

export default function useProducts() {
  const [products, setProducts] = React.useState<ProductData[]>([]);

  React.useEffect(() => {
    setProducts(MOCK_DATA_COMPUTERS);
  }, []);

  return { products };
}
