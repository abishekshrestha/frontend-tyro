import Header from "components/Header/Header";
import React from "react";

const Search = () => {
  const [searchInput, setSearchInput] = React.useState("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <div>
      <Header
        title="Movie Search App"
        searchInput={searchInput}
        changeHandler={changeHandler}
      />
    </div>
  );
};

export default Search;
