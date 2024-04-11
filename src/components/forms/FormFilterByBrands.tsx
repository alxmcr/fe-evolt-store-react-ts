import React from 'react';
import { BrandData } from '../../@types/appTypes';
import FormFieldBrand from '../forms-formfields/FormFieldBrand';
import { TagFilter } from '../../@types/filterTypes';

type Props = {
  brands: BrandData[];
};

export default function FormFilterByBrands({ brands = [] }: Props) {
  const [brandsSelected, setBrandsSelected] = React.useState<TagFilter[]>([]);

  return (
    <form className="flex flex-col gap-2">
      {brands.map((brand) => (
        <FormFieldBrand
          key={brand.id}
          htmlFor={`brand-${brand.id}`}
          labelText={brand.name}
          inputId={`brand-${brand.id}`}
          inputName="brand"
          setBrandsSelected={setBrandsSelected}
        />
      ))}
      {brandsSelected.length > 0 ? (
        <pre>{JSON.stringify(brandsSelected, null, 2)}</pre>
      ) : null}
    </form>
  );
}
