const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        id="search"
        placeholder="Search"
        className="input input-bordered  w-full bg-gray-500/10 rounded-full border-gray-500 text-gray-300"
      />
      <button className="btn btn-md btn-circle bg-rose-500/80  border-0.5 border-gray-500 shadow hover:bg-rose-700/90 transition-all duration-300">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3.5"
          stroke="currentColor"
          className="size-4 text-gray-300 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </form>
  );
};

export default SearchInput;
