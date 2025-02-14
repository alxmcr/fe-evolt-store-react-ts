import { FilterBrandData } from '../../@types/filterTypes';
import FormFieldBrandCheckbox from '../forms-formfields/FormFieldBrandCheckbox';

type Props = {
  brands: FilterBrandData[];
};

export default function GroupCheckboxesBrands({ brands = [] }: Props) {
  return (
    <div>
      {brands.map((brand) => (
        <FormFieldBrandCheckbox key={`${brand.id}`} brand={brand} />
      ))}
    </div>
  );
}
