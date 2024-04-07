import { NavLink } from 'react-router-dom';
import Icon26x26Thunderbolt from './@icons/26x26/Icon26x26Thunderbolt';

export default function AppHeader() {
  return (
    <header>
      <NavLink to="/" className="rounded-full bg-white text-light-950">
        <Icon26x26Thunderbolt />
      </NavLink>
    </header>
  );
}
