import { BrandData } from '../../@types/appTypes';
import FormFieldBrandCheckbox from '../forms-formfields/FormFieldBrandCheckbox';

type Props = {
  brands: BrandData[];
};

export default function GroupCheckboxesBrands({ brands = [] }: Props) {
  return (
    <div>
      {brands.map((brand) => (
        <FormFieldBrandCheckbox
          key={`${brand.id}`}
          htmlFor={`${brand.id}`}
          labelText={`${brand.name}`}
          inputId={`${brand.id}`}
          inputName="brand"
        />
      ))}
    </div>
  );
}
