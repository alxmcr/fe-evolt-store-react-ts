import React from 'react';
import {
  FilterCriteriasContext
} from '../../@providers/FilterCriteriasProvider/FilterCriteriasContext';
import { ProductsLimitsPriceContextxxxx } from '../../@providers/ProductsProvider/ProductsContext';
import FormFielPriceInput from '../forms-formfields/FormFielPriceInput';

export default function GroupInputsRangePrices() {
  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(0);
  const limitsPrice = React.useContext(ProductsLimitsPriceContextxxxx);
  const filterCriterias = React.useContext(FilterCriteriasContext);

  const onChangeMinPrice = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(ev.target.valueAsNumber);
  };

  const onChangeMaxPrice = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(ev.target.valueAsNumber);
  };

  return (
    <div className="flex min-w-[13.375rem] gap-2">
      <FormFielPriceInput
        labelText="Min price"
        inputName="min-range"
        inputId="min-range"
        inputValue={minPrice}
        minValueInput={limitsPrice.startPrice}
        maxValueInput={filterCriterias.maxPrice - 1}
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
        minValueInput={filterCriterias.minPrice + 1}
        maxValueInput={limitsPrice.endPrice}
        onChange={onChangeMaxPrice}
      />
    </div>
  );
}
