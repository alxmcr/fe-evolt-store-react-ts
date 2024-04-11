import React from 'react';
import { TagFilter } from '../../@types/filterTypes';
import AsideProductsFilter from '../asides/AsideProductsFilter';
import BoxGridProducts from '../boxes/BoxGridProducts';

export default function SectionComputers() {
  const [brandsSelected, setBrandsSelected] = React.useState<TagFilter[]>([]);
  const [bluetoothsSelected, setBluetoothsSelected] = React.useState<
    TagFilter[]
  >([]);
  const [storagesSelected, setStoragesSelected] = React.useState<TagFilter[]>(
    [],
  );

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Computers</h2>
      <div className="lg:relative lg:flex lg:gap-4">
        <AsideProductsFilter
          setBrandsSelected={setBrandsSelected}
          setBluetoothsSelected={setBluetoothsSelected}
          setStoragesSelected={setStoragesSelected}
          startMinValue={500}
          startMaxValue={900}
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
