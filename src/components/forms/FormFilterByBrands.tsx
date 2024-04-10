import { BrandData } from '../../@types/appTypes';
import FormFieldBrand from '../forms-formfields/FormFieldBrand';

type Props = {
  brands: BrandData[];
};

export default function FormFilterByBrands({ brands = [] }: Props) {
  return (
    <form className="flex flex-col gap-2">
      {brands.map((brand) => (
        <FormFieldBrand
          key={brand.id}
          id={`brand-${brand.name}`}
          label={brand.name}
        />
      ))}
    </form>
  );
}
