import { BrandData } from '../../@types/appTypes';

type Props = {
  labelText: string;
  htmlFor: string;
  brandSelected: BrandData | null;
  onChangeBrand: (brand: BrandData) => void;
};

export default function FormFieldBrand({
  labelText = '',
  htmlFor = '',
  brandSelected,
  onChangeBrand,
}: Props) {
  console.log('🚀 ~ brandSelected:', brandSelected);
  return (
    <label htmlFor={htmlFor} className={`flex items-center gap-x-2 text-lg`}>
      <input
        type="checkbox"
        name={htmlFor}
        id={htmlFor}
        className="peer/draft hidden size-10"
        onChange={() => onChangeBrand}
        checked={brandSelected?.id === htmlFor}
      />
      <span
        className="flex items-center gap-2 before:flex before:size-5 before:items-center before:justify-center before:rounded-full before:border before:border-solid before:border-perano-500 before:content-[''] peer-checked/draft:text-perano-500  peer-checked/draft:before:bg-perano-500
        peer-checked/draft:before:bg-[url(icons/16x16/Icon16x16Check.svg)] peer-checked/draft:before:bg-center peer-checked/draft:before:bg-no-repeat"
      >
        {labelText}
      </span>
    </label>
  );
}
