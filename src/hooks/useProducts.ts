import React from 'react';
import { MOCK_DATA_COMPUTERS } from '../mocks/mock-laptops';
import { ProductData } from '../@types/appTypes';
import { LoadingStates } from '../@enums/appEnums';

export default function useProducts() {
  const [products, setProducts] = React.useState<ProductData[]>([]);
  const [statusProducts, setStatusProducts] = React.useState(LoadingStates.IDLE);

  React.useEffect(() => {
    setStatusProducts(LoadingStates.PENDING);
    setProducts(MOCK_DATA_COMPUTERS);
    setStatusProducts(LoadingStates.SUCCESS);
  }, []);

  return { products, statusProducts, setProducts };
}
