import React from 'react';
import Icon16x16ArrowRight from '../@icons/16x16/Icon16x16ArrowRight';
import GroupInputsRangePrices from '../groups-inputs/GroupInputsRangePrices';

export default function FormFilterByRangePrices() {
  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
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
