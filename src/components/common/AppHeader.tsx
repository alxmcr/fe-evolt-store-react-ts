import { NavLink } from 'react-router-dom';
import Icon26x26Thunderbolt from '../@icons/26x26/Icon26x26Thunderbolt';
import Icon26x26User from '../@icons/26x26/Icon26x26User';
import Icon26x26Heart from '../@icons/26x26/Icon26x26Heart';
import Icon26x26Cart from '../@icons/26x26/Icon26x26Cart';
import AppBadgeIcon from '../badges/AppBadgeIcon';

export default function AppHeader() {
  return (
    <header className="flex h-[58px] items-center justify-between rounded-md bg-perano-400 px-[1rem] py-[.6875rem]">
      <NavLink to="/" className="flex items-center gap-2 text-light-950">
        <span className="flex size-[38px] items-center justify-center  rounded-full bg-white">
          <Icon26x26Thunderbolt />
        </span>{' '}
        <span className="text-[16px] font-semibold">eVolt</span>
      </NavLink>
      <div className="flex items-center gap-2">
        <NavLink to="/user-profile" className="flex size-[40px] items-center">
          <AppBadgeIcon smallText="0">
            <Icon26x26User />
          </AppBadgeIcon>
        </NavLink>
        <NavLink
          to="/favorites-products"
          className="flex size-[40px] items-center"
        >
          <AppBadgeIcon smallText="0">
            <Icon26x26Heart />
          </AppBadgeIcon>
        </NavLink>
        <NavLink
          to="/favorites-products"
          className="flex size-[40px] items-center"
        >
          <AppBadgeIcon smallText="0">
            <Icon26x26Cart />
          </AppBadgeIcon>
        </NavLink>
      </div>
    </header>
  );
}
