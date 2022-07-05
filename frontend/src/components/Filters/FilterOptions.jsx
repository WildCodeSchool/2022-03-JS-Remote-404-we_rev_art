import { React } from "react";

function FilterOptions({ filteroptions, filter, setFilter, type }) {
  const handleClick = () => {
    const newFilter = { ...filter };
    if (!newFilter[type].includes(filteroptions)) {
      newFilter[type] = [...newFilter[type], filteroptions];
    } else {
      newFilter[type] = newFilter[type].filter((el) => el !== filteroptions);
    }
    setFilter(newFilter);
  };

  return (
    <button
      className={`filter_options ${
        filter[type].includes(filteroptions) ? "yellow" : ""
      }`}
      type="button"
      onClick={handleClick}
    >
      {filteroptions}
    </button>
  );
}

export default FilterOptions;
