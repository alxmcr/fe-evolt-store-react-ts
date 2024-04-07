import Icon18x18Search from '../../@icons/18x18/Icon18x18Search';

export default function AppHeaderSearchForm() {
  return (
    <form className="hidden rounded-2xl bg-white px-[.25rem] py-[.1875rem] md:flex md:h-[2.25rem] md:w-[19.75rem]">
      <input
        type="text"
        placeholder="Enter your product name"
        className="w-full bg-transparent px-5 outline-none"
      />
      <button
        type="submit"
        className="flex min-h-[1.875rem] min-w-[1.875rem] items-center justify-center rounded-full bg-light-950 text-white"
      >
        <Icon18x18Search />
      </button>
    </form>
  );
}
