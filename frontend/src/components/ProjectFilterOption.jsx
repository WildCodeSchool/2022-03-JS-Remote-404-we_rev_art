import { React, useState } from "react";
import FilterOptions from "./FilterOptions";

function ProjectFilterOption({ list, filter, setFilter }) {
  const [buttonClicked, setButtonClicked] = useState(false);
  function handleClick() {
    setButtonClicked(!buttonClicked);
  }

  return (
    <section className="list_map">
      <button className="filter_selection" type="button" onClick={handleClick}>
        {list.filter}
      </button>

      <ul className="list_map">
        {buttonClicked
          ? list.option.map((filteroptions) => (
              <FilterOptions
                filteroptions={filteroptions}
                filter={filter}
                setFilter={setFilter}
              />
            ))
          : ""}
      </ul>
    </section>
  );
}

export default ProjectFilterOption;
