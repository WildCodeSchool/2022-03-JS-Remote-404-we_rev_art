import { React, useState } from "react";

function FilterOptions({ filteroptions }) {
  const [filterButtonClicked, setFilterButtonClicked] = useState(false);
  function handleClick() {
    setFilterButtonClicked(!filterButtonClicked);
    console.warn(filteroptions);
  }
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
