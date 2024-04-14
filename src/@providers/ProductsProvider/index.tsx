import React from 'react';
import useProducts from '../../hooks/useProducts';
import { ProductsContext, ProductsLimitsPriceContext } from './ProductsContext';
import {
  getMaxPricePossible,
  getMinPricePossible,
} from '../../helpers/helpers-products';
import { LoadingStates } from '../../@enums/appEnums';
import { ProductsLimitsPrice } from '../../@reducers/filterProductsCriteriasReducer';

type Props = {
  children: React.ReactNode;
};

export default function ProductsProvider({ children }: Props) {
  const { products, statusProducts } = useProducts();
  const [startPrice, setStartPrice] = React.useState(0);
  const [endPrice, setEndPrice] = React.useState(0);

  const limitsPrice: ProductsLimitsPrice = {
    startPrice,
    endPrice,
  };

  React.useEffect(() => {
    if (LoadingStates.SUCCESS === statusProducts) {
      // Find out limits price
      setStartPrice(getMinPricePossible(products));
      setEndPrice(getMaxPricePossible(products));
    }
  }, [statusProducts, products]);

  return (
    <ProductsContext.Provider value={products}>
      <ProductsLimitsPriceContext.Provider value={limitsPrice}>
        {children}
      </ProductsLimitsPriceContext.Provider>
    </ProductsContext.Provider>
  );
}
