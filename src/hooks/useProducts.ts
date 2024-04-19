import React from 'react';
import { LoadingStates } from '../@enums/appEnums';
import { ProductData } from '../@types/appTypes';
import { findProductCheapest, findProductMostExpensive } from '../helpers/helpers-hooks';
import { MOCK_PRODUCTS } from '../mocks/mock-laptops';

export default function useProducts() {
  const [products, setProducts] = React.useState<ProductData[]>([]);
  const [productCheapest, setProductCheapest] = React.useState<ProductData | null>(null);
  const [productMostExpensive, setProductMostExpensive] = React.useState<ProductData | null>(null);
  const [statusProducts, setStatusProducts] = React.useState(LoadingStates.IDLE);

  React.useEffect(() => {
    setStatusProducts(LoadingStates.PENDING);
    setProducts(MOCK_PRODUCTS);
    setProductCheapest(findProductCheapest(MOCK_PRODUCTS));
    setProductMostExpensive(findProductMostExpensive(MOCK_PRODUCTS));
    setStatusProducts(LoadingStates.SUCCESS);
  }, []);

  return { products, productCheapest, productMostExpensive, statusProducts, setProducts };
}
