import { NavLink } from 'react-router-dom';
import Icon30x30Cart from '../../@icons/30x30/Icon30x30Cart';
import Icon30x30Heart from '../../@icons/30x30/Icon30x30Heart';
import Icon30x30User from '../../@icons/30x30/Icon30x30User';
import AppBadgeIcon from '../../badges/AppBadgeIcon';

export default function AppHeaderActions() {
  const handleFavorites = () => {
    console.log('Display favorites');
  };

  const handleCart = () => {
    console.log('Display cart');
  };

  return (
    <div className="flex items-center gap-2">
      <NavLink to="/user-profile" className="flex size-[40px] items-center">
        <AppBadgeIcon smallText="0">
          <Icon30x30User />
        </AppBadgeIcon>
      </NavLink>
      <button
        className="flex size-[40px] items-center"
        onClick={handleFavorites}
      >
        <AppBadgeIcon smallText="0">
          <Icon30x30Heart />
        </AppBadgeIcon>
      </button>
      <button className="flex size-[40px] items-center" onClick={handleCart}>
        <AppBadgeIcon smallText="0">
          <Icon30x30Cart />
        </AppBadgeIcon>
      </button>
    </div>
  );
}
