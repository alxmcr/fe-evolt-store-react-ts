import React from 'react';
import {
  FilterCriteriasContext,
  FilterCriteriasDispatchContext,
} from '../../@providers/FilterCriteriasProvider/FilterCriteriasContext';
import { ProductsLimitsPriceContext } from '../../@providers/ProductsProvider/ProductsContext';
import FormFielPriceInput from '../forms-formfields/FormFielPriceInput';

export default function GroupInputsRangePrices() {
  const limitsPrice = React.useContext(ProductsLimitsPriceContext);
  const filterCriterias = React.useContext(FilterCriteriasContext);
  const dispatch = React.useContext(FilterCriteriasDispatchContext);

  const onChangeMinPrice = (ev: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'update_min_price',
      payload: {
        min: ev.target.valueAsNumber,
      },
    });
  };

  const onChangeMaxPrice = (ev: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'update_max_price',
      payload: {
        max: ev.target.valueAsNumber,
      },
    });
  };

  return (
    <div className="flex min-w-[13.375rem] gap-2">
      <FormFielPriceInput
        labelText="Min price"
        inputName="min-range"
        inputId="min-range"
        inputValue={filterCriterias.minPrice}
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
        inputValue={filterCriterias.maxPrice}
        minValueInput={filterCriterias.minPrice + 1}
        maxValueInput={limitsPrice.endPrice}
        onChange={onChangeMaxPrice}
      />
    </div>
  );
}
