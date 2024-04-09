import Icon16x16ArrowRight from '../@icons/16x16/Icon16x16ArrowRight';
import FormFielPriceInput from '../forms-formfields/FormFielPriceInput';

export default function FormFilterByRangePrices() {
  return (
    <form onSubmit={onSubmit} className="flex items-start gap-3">
      <div className="flex min-w-[13.375rem] gap-2">
        <FormFielPriceInput
          labelText="Min price"
          inputName="min-range"
          inputId="min-range"
          inputValue={minPrice}
          inputMin={MIN_VALUE}
          inputMax={maxPrice - 1}
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
          inputMin={minPrice + 1}
          inputMax={MAX_VALUE}
          onChange={onChangeMaxPrice}
        />
      </div>
      <div>
        <button
          type="submit"
          className="flex h-[2.875rem] w-8 items-center justify-center rounded-md bg-perano-300 text-xl text-white"
        >
          <Icon16x16ArrowRight />
        </button>
      </div>
    </form>
  );
}
