import React from 'react';
import { LoadingStates } from '../@enums/appEnums';
import { ProductData } from '../@types/appTypes';
import { findProductCheapest } from '../helpers/helpers-hooks';
import { MOCK_DATA_COMPUTERS } from '../mocks/mock-laptops';

export default function useProductCheapest() {
  const [productCheapest, setProductCheapest] = React.useState<ProductData | null>(null);
  const [statusQuery, setStatusQuery] = React.useState(LoadingStates.IDLE);

  React.useEffect(() => {
    setStatusQuery(LoadingStates.PENDING);
    const cheapProduct = findProductCheapest(MOCK_DATA_COMPUTERS);
    setProductCheapest(cheapProduct);
    setStatusQuery(LoadingStates.PENDING);
  }, []);

  return { productCheapest, statusQuery };
}
