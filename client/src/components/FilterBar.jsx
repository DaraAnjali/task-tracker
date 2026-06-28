const FilterBar = ({
  search,
  setSearch,
  filter,
  setFilter,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">

      <input
        type="text"
        placeholder="Search Tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-1/2 border rounded-lg p-3"
      />

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border rounded-lg p-3"
      >
        <option>All</option>
        <option>Pending</option>
        <option>Completed</option>
      </select>

    </div>
  );
};

export default FilterBar;