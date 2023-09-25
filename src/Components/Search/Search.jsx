const Search = () => {
  return (
    <div className="text-center mt-5 mb-5 bg-red-100 w-100 h-60">
      <h1 className="text-3xl font-bold mb-8 pt-12">
        I Grow By Helping People In Need
      </h1>
      <input
        type="text"
        placeholder="Search here"
        className="input input-bordered w-full max-w-xs"
      />{" "}
      <button className="text-white  bg-red-500  border px-5 py-2 rounded-md">
        Search
      </button>
    </div>
  );
};

export default Search;
