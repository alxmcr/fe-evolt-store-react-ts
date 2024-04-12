import React from 'react';
import { ProductFilterCriteriasContext } from '../../providers/ProductFilterCriteriasProvider/ProductFilterCriteriasContext';
import FormFielPriceInput from '../forms-formfields/FormFielPriceInput';

export default function GroupInputsRangePrices() {
  const contextProductFilterCriterias = React.useContext(
    ProductFilterCriteriasContext,
  );

  const onChangeMinPrice = (ev: React.ChangeEvent<HTMLInputElement>) => {
    contextProductFilterCriterias.setMinPrice(Number(ev.target.value));
  };

  const onChangeMaxPrice = (ev: React.ChangeEvent<HTMLInputElement>) => {
    contextProductFilterCriterias.setMaxPrice(Number(ev.target.value));
  };

  return (
    <div className="flex min-w-[13.375rem] gap-2">
      <FormFielPriceInput
        labelText="Min price"
        inputName="min-range"
        inputId="min-range"
        inputValue={contextProductFilterCriterias.minPrice}
        minValue={contextProductFilterCriterias.minValue}
        maxValue={contextProductFilterCriterias.maxPrice - 1}
        onChange={onChangeMinPrice}
      />
      <span className="flex h-[2.875rem] w-[1.125rem] items-center justify-center text-[.875rem]">
        to
      </span>
      <FormFielPriceInput
        labelText="Max price"
        inputName="max-range"
        inputId="max-range"
        inputValue={contextProductFilterCriterias.maxPrice}
        minValue={contextProductFilterCriterias.minPrice + 1}
        maxValue={contextProductFilterCriterias.maxValue}
        onChange={onChangeMaxPrice}
      />
    </div>
  );
}
