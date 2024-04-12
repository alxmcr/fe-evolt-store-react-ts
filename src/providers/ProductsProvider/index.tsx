import React from 'react';
import { ProductData } from '../../@types/appTypes';
import { ProductsContextData } from '../../@types/providerTypes';
import { LoadingStates } from '../../@types/serviceTypes';
import {
  findAllBluetooths,
  findAllBrands,
  findAllStorages,
} from '../../helpers/helpers-products';
import useProducts from '../../hooks/useProducts';
import { ProductsContext } from './ProductsContext';

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
      const brands = findAllBrands(products);
      const storages = findAllStorages(products);
      const bluetooths = findAllBluetooths(products);

      console.log('🚀 ~ React.useEffect ~ brands:', brands);
      console.log('🚀 ~ React.useEffect ~ storages:', storages);
      console.log('🚀 ~ React.useEffect ~ bluetooths:', bluetooths);

      /*
      const min = getMinPricePossible(products);
      const max = getMaxPricePossible(products);
      const storages = findAllStorages(products);
      const bluetooths = findAllBluetooths(products);
      console.log({
        max,
        min,
        brands,
        storages,
        bluetooths,
      });
      */
    }
    console.log('🚀 ~ React.useEffect ~ products:', products);
    console.log('🚀 ~ React.useEffect ~ products:', products);
  }, [statusProducts, products]);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
