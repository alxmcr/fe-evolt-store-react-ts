import React from 'react';

type Props = {
  children: React.ReactNode;
  smallText: string;
};

export default function AppBadgeIcon({ children, smallText = '0' }: Props) {
  return (
    <div className="relative">
      {children}
      <span className="absolute right-0 top-0 flex size-[1rem] items-center justify-center rounded-md bg-perano-600 px-[.0625rem] py-[.125rem] text-[.75rem] text-white">
        {smallText}
      </span>
    </div>
  );
}
