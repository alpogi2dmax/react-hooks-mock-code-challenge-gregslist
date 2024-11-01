import React, { useState } from "react";

function Search({onSearch}) {

  const [search, setSearch] = useState('')

  function handleSearchChange(e) {
    setSearch(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(search);
    setSearch("")
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleSearchChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
