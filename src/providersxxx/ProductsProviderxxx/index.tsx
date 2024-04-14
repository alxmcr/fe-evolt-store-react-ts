import React from 'react';
import { LoadingStates } from '../../@enums/appEnums';
import { ProductsContextData } from '../../@types/providerTypes';
import { getMaxPricePossible, getMinPricePossible } from '../../helpers/helpers-products';
import useProducts from '../../hooks/useProducts';
import { ProductsContext } from './ProductsContext';

type Props = {
  children: React.ReactNode;
};

export default function ProductsProvider({ children }: Props) {
  const [startRangePrice, setStartRangePrice] = React.useState(0);
  const [endRangePrice, setEndRangePrice] = React.useState(0);
  const { products, statusProducts } = useProducts();

  const value: ProductsContextData = {
    products,
    statusProducts,
    startRangePrice,
    endRangePrice,
  };

  React.useEffect(() => {
    if (LoadingStates.SUCCESS === statusProducts) {
      // Extract data
      setStartRangePrice(getMinPricePossible(products));
      setEndRangePrice(getMaxPricePossible(products));
    }
  }, [statusProducts, products]);

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}
