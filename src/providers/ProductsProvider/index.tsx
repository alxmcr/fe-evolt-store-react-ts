import React from 'react';
import { ProductsContextData } from '../../@types/providerTypes';
import useProducts from '../../hooks/useProducts';
import { ProductsContext } from './ProductsContext';
import { LoadingStates } from '../../@types/serviceTypes';
import { ProductData } from '../../@types/appTypes';
import {
  findAllBluetooths,
  findAllBrands,
  findAllStorages,
  getMaxPricePossible,
  getMinPricePossible,
} from '../../helpers/helpers-products';

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
      // Extract data
      const min = getMinPricePossible(products);
      const max = getMaxPricePossible(products);
      const brands = findAllBrands(products);
      const storages = findAllStorages(products);
      const bluetooths = findAllBluetooths(products);
      console.log({
        max,
        min,
        brands,
        storages,
        bluetooths,
      });
    }
  }, [statusProducts, products]);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
