import React from 'react';
import { ProductsContext } from '../../@providers/ProductsProvider/ProductsContext';
import AsideProductsFilter from '../asides/AsideProductsFilter';
import BoxGridProducts from '../boxes/BoxGridProducts';

export default function SectionComputers() {
  const products = React.useContext(ProductsContext);

  if (products?.length === 0) {
    return (
      <div className="flex h-[88vh] w-full flex-col items-center justify-center gap-3 bg-white">
        <h2 className="w-[90%] text-center text-[2rem]">Your tech store does not have products.</h2>
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Computers ({products.length})</h2>
      <div className="lg:relative lg:flex lg:gap-4">
        <AsideProductsFilter />
        <BoxGridProducts />
      </div>
    </section>
  );
}
