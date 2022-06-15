import { React, useEffect, useState } from "react";

function FilterOptions({ filteroptions, filter, setFilter }) {
  const [filterButtonClicked, setFilterButtonClicked] = useState(false);

  function handleClick() {
    setFilterButtonClicked(!filterButtonClicked);
  }
  useEffect(() => {
    if (filterButtonClicked) {
      setFilter([...filter, filteroptions]);
    } else if (!filterButtonClicked) {
      setFilter(filter.filter((el) => el !== filteroptions));
    }
  }, [filterButtonClicked]);

  return (
    <button
      className={`filter_options ${filterButtonClicked ? "yellow" : ""}`}
      type="button"
      onClick={handleClick}
    >
      {" "}
      {filteroptions}
    </button>
  );
}

export default FilterOptions;
