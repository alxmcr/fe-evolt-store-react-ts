import React from 'react';
import {
  BluetoothData,
  BrandData,
  ProductData,
  StorageData,
} from '../../@types/appTypes';
import { ProductsContextData } from '../../@types/providerTypes';
import { LoadingStates } from '../../@types/serviceTypes';
import {
  findAllBluetooths,
  findAllBrands,
  findAllStorages,
  getMaxPricePossible,
  getMinPricePossible,
} from '../../helpers/helpers-products';
import useProducts from '../../hooks/useProducts';
import { ProductsContext } from './ProductsContext';

type Props = {
  children: React.ReactNode;
};

export default function ProductsProvider({ children }: Props) {
  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(0);
  const [brands, setBrands] = React.useState<BrandData[]>([]);
  const [storages, setStorages] = React.useState<StorageData[]>([]);
  const [bluetooths, setBluetooths] = React.useState<BluetoothData[]>([]);
  const [productsFiltered, setProductsFiltered] = React.useState<ProductData[]>(
    [],
  );
  const { products, statusProducts } = useProducts();

  const value: ProductsContextData = {
    products,
    productsFiltered,
    minPrice,
    maxPrice,
    brands,
    storages,
    bluetooths,
  };

  React.useEffect(() => {
    if (LoadingStates.SUCCESS === statusProducts) {
      setProductsFiltered(products);
      // Extract data
      setMinPrice(getMinPricePossible(products));
      setMaxPrice(getMaxPricePossible(products));
      setBrands(findAllBrands(products));
      setStorages(findAllStorages(products));
      setBluetooths(findAllBluetooths(products));
    }
  }, [statusProducts, products]);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
