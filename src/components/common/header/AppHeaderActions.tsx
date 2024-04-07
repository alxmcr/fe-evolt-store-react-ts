import { NavLink } from 'react-router-dom';
import Icon30x30Cart from '../../@icons/30x30/Icon30x30Cart';
import Icon30x30Heart from '../../@icons/30x30/Icon30x30Heart';
import Icon30x30User from '../../@icons/30x30/Icon30x30User';
import AppBadgeIcon from '../../badges/AppBadgeIcon';

export default function AppHeaderActions() {
  return (
    <div className="flex items-center gap-2">
      <NavLink to="/user-profile" className="flex size-[40px] items-center">
        <AppBadgeIcon smallText="0">
          <Icon30x30User />
        </AppBadgeIcon>
      </NavLink>
      <NavLink
        to="/favorites-products"
        className="flex size-[40px] items-center"
      >
        <AppBadgeIcon smallText="0">
          <Icon30x30Heart />
        </AppBadgeIcon>
      </NavLink>
      <NavLink
        to="/favorites-products"
        className="flex size-[40px] items-center"
      >
        <AppBadgeIcon smallText="0">
          <Icon30x30Cart />
        </AppBadgeIcon>
      </NavLink>
    </div>
  );
}
