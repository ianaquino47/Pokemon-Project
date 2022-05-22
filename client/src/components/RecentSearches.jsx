const RecentSearches = ({ recent, submit, setQuery }) => {
  const handleClick = (value) => async () => {
    await setQuery(value);
  };
  return (
    <div className="right-container">
      <div className="search-header">
        <h2>Recent Searches</h2>
      </div>
      <form onSubmit={submit}>
        {recent?.map((search, index) => (
          <button
            className="search-item"
            key={index}
            onClick={handleClick(search)}
          >
            {search}
          </button>
        ))}
      </form>
    </div>
  );
};

export default RecentSearches;
