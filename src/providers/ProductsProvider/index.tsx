import React from 'react';
import { ProductsContextData } from '../../@types/providerTypes';
import useProducts from '../../hooks/useProducts';
import { ProductsContext } from './ProductsContext';
import { LoadingStates } from '../../@types/serviceTypes';
import { ProductData } from '../../@types/appTypes';

type Props = {
  children: React.ReactNode;
};

export default function ProductsProvider({ children }: Props) {
  const [productsFiltered, setProductsFiltered] = React.useState<ProductData[]>(
    [],
  );
  const { products, statusProducts } = useProducts();

  const value: ProductsContextData = {
    products,
    productsFiltered,
  };

  React.useEffect(() => {
    if (LoadingStates.SUCCESS === statusProducts) {
      setProductsFiltered(products);
    }
  }, [statusProducts, products]);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
