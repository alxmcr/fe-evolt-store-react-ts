import React from 'react';
import { FilterCriteriasDispatchContext } from '../../@providers/FilterCriteriasProvider/FilterCriteriasContext';
import Icon16x16ArrowRight from '../@icons/16x16/Icon16x16ArrowRight';
import GroupInputsRangePrices from '../groups-inputs/GroupInputsRangePrices';

export default function FormFilterByRangePricesxxx() {
  const dispatch = React.useContext(FilterCriteriasDispatchContext);
  const [formData, setFormData] = React.useState<FormData>({ checkbox1: false, checkbox2: false });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseFloat(event.target.value) || 0;
    setFormData({ ...formData, [event.target.name]: parsedValue });
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();

    dispatch({
      type: 'update_min_price',
      payload: {
        min: 0,
      },
    });

    dispatch({
      type: 'update_max_price',
      payload: {
        max: 0,
      },
    });
  };

  return (
    <form onSubmit={onSubmit} className="flex items-start gap-3">
      <GroupInputsRangePrices />
      <div>
        <button
          type="submit"
          className="flex h-[2.875rem] w-8 items-center justify-center rounded-md bg-perano-500 text-xl text-white"
        >
          <Icon16x16ArrowRight />
        </button>
      </div>
    </form>
  );
}
