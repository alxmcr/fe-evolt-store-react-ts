import { ProductsContextData } from '../../@types/providerTypes';
import useProducts from '../../hooks/useProducts';
import { ProductsContext } from './ProductsContext';

type Props = {
  children: React.ReactNode;
};

export default function ProductsProvider({ children }: Props) {
  const { products } = useProducts();

  const value: ProductsContextData = {
    products,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
