import React from 'react';
import { LoadingStates } from '../../@enums/appEnums';
import {
  BluetoothData,
  BrandData,
  ProductData,
  StorageData,
} from '../../@types/appTypes';
import { ProductsContextData } from '../../@types/providerTypes';
import {
  getMaxPricePossible,
  getMinPricePossible,
} from '../../helpers/helpers-products';
import {
  findAllFilterBluetooths,
  findAllFilterBrands,
  findAllFilterStorages,
} from '../../helpers/helpers-products-filter';
import useProducts from '../../hooks/useProducts';
import { ProductsContext } from './ProductsContext';

type Props = {
  children: React.ReactNode;
};

export default function ProductsProvider({ children }: Props) {
  const [startRangePrice, setStartRangePrice] = React.useState(0);
  const [endRangePrice, setEndRangePrice] = React.useState(0);
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
    startRangePrice,
    endRangePrice,
    brands,
    storages,
    bluetooths,
  };

  React.useEffect(() => {
    if (LoadingStates.SUCCESS === statusProducts) {
      setProductsFiltered(products);
      // Extract data
      setStartRangePrice(getMinPricePossible(products));
      setEndRangePrice(getMaxPricePossible(products));
      setBrands(findAllFilterBrands(products));
      setStorages(findAllFilterStorages(products));
      setBluetooths(findAllFilterBluetooths(products));
    }
  }, [statusProducts, products]);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
