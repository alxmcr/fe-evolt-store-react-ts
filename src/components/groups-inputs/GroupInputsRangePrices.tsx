import FormFielPriceInput from '../forms-formfields/FormFielPriceInput';

type Props = {
  minValue: number;
  maxValue: number;
  minPrice: number;
  maxPrice: number;
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
};

export default function GroupInputsRangePrices({
  minValue = 0,
  maxValue = 0,
  minPrice = 0,
  maxPrice = 0,
  setMinPrice,
  setMaxPrice,
}: Props) {
  const onChangeMinPrice = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(ev.target.value));
  };

  const onChangeMaxPrice = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(ev.target.value));
  };

  return (
    <div className="flex min-w-[13.375rem] gap-2">
      <FormFielPriceInput
        labelText="Min price"
        inputName="min-range"
        inputId="min-range"
        inputValue={minPrice}
        minValue={minValue}
        maxValue={maxPrice - 1}
        onChange={onChangeMinPrice}
      />
      <span className="flex h-[2.875rem] w-[1.125rem] items-center justify-center text-[.875rem]">
        to
      </span>
      <FormFielPriceInput
        labelText="Max price"
        inputName="max-range"
        inputId="max-range"
        inputValue={maxPrice}
        minValue={minPrice + 1}
        maxValue={maxValue}
        onChange={onChangeMaxPrice}
      />
    </div>
  );
}
