import { NavLink } from 'react-router-dom';
import Icon26x26Thunderbolt from '../../@icons/26x26/Icon26x26Thunderbolt';
import AppHeaderActions from './AppHeaderActions';
import AppHeaderSearchForm from './AppHeaderSearchForm';

export default function AppHeader() {
  return (
    <header className="flex h-[58px] items-center justify-between rounded-md bg-perano-400 px-[1rem] py-[.6875rem]">
      <NavLink to="/" className="flex items-center gap-2 text-light-950">
        <span className="flex size-[38px] items-center justify-center  rounded-full bg-white">
          <Icon26x26Thunderbolt />
        </span>{' '}
        <span className="text-[16px] font-semibold">eVolt</span>
      </NavLink>
      <AppHeaderSearchForm />
      <AppHeaderActions />
    </header>
  );
}
