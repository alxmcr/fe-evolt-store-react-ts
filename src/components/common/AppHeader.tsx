import Icon26x26Thunderbolt from '../@icons/26x26/Icon26x26Thunderbolt';
import AppNavLink from './AppNavlink';

export default function AppHeader() {
  return (
    <header>
      <AppNavLink className="text-light-950 rounded-full bg-white">
        <Icon26x26Thunderbolt />
      </AppNavLink>
    </header>
  );
}
