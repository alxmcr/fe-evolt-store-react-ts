import Icon18x18Search from './@icons/18x18/Icon18x18Search';
import Icon26x26Cart from './@icons/26x26/Icon26x26Cart';
import Icon26x26Heart from './@icons/26x26/Icon26x26Heart';
import Icon26x26Thunderbolt from './@icons/26x26/Icon26x26Thunderbolt';

export default function AppHeader() {
  return (
    <header className="flex flex-col gap-4">
      <a href="#" className="text-green-400">
        <Icon26x26Thunderbolt />
      </a>
      <a href="#" className="text-orange-500">
        <Icon26x26Heart />
      </a>
      <a href="#" className="text-cyan-800">
        <Icon26x26Cart />
      </a>
      <a href="#" className="text-cyan-800">
        <Icon18x18Search />
      </a>
      <h3 className="text-perano-300 text-3xl font-bold underline">eVolt</h3>
      <h2 className="text-green-yellow-500">Computers</h2>
      <button className="text-light-300 opacity-100">Filter</button>
    </header>
  );
}
