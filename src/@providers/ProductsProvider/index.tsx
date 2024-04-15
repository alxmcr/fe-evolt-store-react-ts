import React from 'react';
import { LoadingStates } from '../../@enums/appEnums';
import { RangePriceProducts } from '../../@types/providerTypes';
import { findProductCheapest, findProductMostExpensive } from '../../helpers/helpers-hooks';
import useProducts from '../../hooks/useProducts';
import { ProductsContext, ProductsLoadingStateContext, RangePriceProductsContext } from './ProductsContext';

type Props = {
  children: React.ReactNode;
};

export default function ProductsProvider({ children }: Props) {
  const { products, statusProducts } = useProducts();
  const [startPrice, setStartPrice] = React.useState(0);
  const [endPrice, setEndPrice] = React.useState(0);

  const rangePrice: RangePriceProducts = {
    minPriceAllowed: startPrice,
    maxPriceAllowed: endPrice,
  };

  React.useEffect(() => {
    if (LoadingStates.SUCCESS === statusProducts) {
      // Find out limits price
      const productCheapest = findProductCheapest(products);
      const productMostExpensive = findProductMostExpensive(products);

      if (productCheapest !== null && productMostExpensive !== null) {
        setStartPrice(Math.floor(productCheapest.priceValue));
        setEndPrice(Math.floor(productMostExpensive.priceValue));
      }
    }
  }, [statusProducts, products]);

  return (
    <ProductsContext.Provider value={products}>
      <ProductsLoadingStateContext.Provider value={statusProducts}>
        <RangePriceProductsContext.Provider value={rangePrice}>{children}</RangePriceProductsContext.Provider>
      </ProductsLoadingStateContext.Provider>
    </ProductsContext.Provider>
  );
}
