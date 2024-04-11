import React from 'react';
import { BrandData } from '../../@types/appTypes';
import FormFieldBrand from '../forms-formfields/FormFieldBrand';

type Props = {
  brands: BrandData[];
};

export default function FormFilterByBrands({ brands = [] }: Props) {
  const [brandSelected, setBrandSelected] = React.useState<BrandData | null>(
    null,
  );

  const onChangeBrand = (brand: BrandData) => {
    setBrandSelected(brand);
  };

  return (
    <form className="flex flex-col gap-2">
      {brands.map((brand) => (
        <FormFieldBrand
          key={brand.id}
          htmlFor={`brand-${brand.name}`}
          labelText={brand.name}
          brandSelected={brandSelected}
          onChangeBrand={() => onChangeBrand(brand)}
        />
      ))}
    </form>
  );
}
