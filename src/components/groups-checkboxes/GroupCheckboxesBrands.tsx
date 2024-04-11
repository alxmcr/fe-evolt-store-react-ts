import { BrandData } from '../../@types/appTypes';
import { TagFilter } from '../../@types/filterTypes';
import FormFieldBrand from '../forms-formfields/FormFieldBrand';

type Props = {
  brands: BrandData[];
  setBrandsSelected: React.Dispatch<React.SetStateAction<TagFilter[]>>;
};

export default function GroupCheckboxesBrands({
  brands = [],
  setBrandsSelected,
}: Props) {
  return (
    <div>
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
    </div>
  );
}
