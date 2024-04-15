import React from 'react';
import useProducts from '../../hooks/useProducts';
import {
  ProductCheapestContext,
  ProductMostExpensiveContext,
  ProductsContext,
  ProductsLoadingStateContext
} from './ProductsContext';

type Props = {
  children: React.ReactNode;
};

export default function ProductsProvider({ children }: Props) {
  const { products, statusProducts, productCheapest, productMostExpensive } = useProducts();

  return (
    <ProductsContext.Provider value={products}>
      <ProductsLoadingStateContext.Provider value={statusProducts}>
        <ProductCheapestContext.Provider value={productCheapest}>
          <ProductMostExpensiveContext.Provider value={productMostExpensive}>
            {children}
          </ProductMostExpensiveContext.Provider>
        </ProductCheapestContext.Provider>
      </ProductsLoadingStateContext.Provider>
    </ProductsContext.Provider>
  );
}
