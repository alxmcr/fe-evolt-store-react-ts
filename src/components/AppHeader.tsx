import Icon26x26Thunderbolt from './@icons/26x26/Icon26x26Thunderbolt';

export default function AppHeader() {
  return (
    <header>
      <a href="#">
        <Icon26x26Thunderbolt className="text-green-400" />
      </a>
      <h3 className="text-perano-300 text-3xl font-bold underline">eVolt</h3>
      <h2 className="text-green-yellow-500">Computers</h2>
      <button className="text-light-300 opacity-100">Filter</button>
    </header>
  );
}
