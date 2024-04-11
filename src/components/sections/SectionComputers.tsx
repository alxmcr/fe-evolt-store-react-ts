import React from 'react';
import { TagFilter } from '../../@types/filterTypes';
import AsideProductsFilter from '../asides/AsideProductsFilter';
import BoxGridProducts from '../boxes/BoxGridProducts';
import { ProductsContext } from '../../providers/ProductsProvider/ProductsContext';

export default function SectionComputers() {
  const startMinValue = 500;
  const startMaxValue = 900;
  const [minPrice, setMinPrice] = React.useState(startMinValue);
  const [maxPrice, setMaxPrice] = React.useState(startMaxValue);
  const [brandsSelected, setBrandsSelected] = React.useState<TagFilter[]>([]);
  const [bluetoothsSelected, setBluetoothsSelected] = React.useState<
    TagFilter[]
  >([]);
  const [storagesSelected, setStoragesSelected] = React.useState<TagFilter[]>(
    [],
  );
  const context = React.useContext(ProductsContext);

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">
        Computers ({context.productsFiltered?.length})
      </h2>
      <div className="lg:relative lg:flex lg:gap-4">
        <AsideProductsFilter
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          setBrandsSelected={setBrandsSelected}
          setBluetoothsSelected={setBluetoothsSelected}
          setStoragesSelected={setStoragesSelected}
        />
        <BoxGridProducts
          brandsSelected={brandsSelected}
          bluetoothsSelected={bluetoothsSelected}
          storagesSelected={storagesSelected}
        />
      </div>
    </section>
  );
}
