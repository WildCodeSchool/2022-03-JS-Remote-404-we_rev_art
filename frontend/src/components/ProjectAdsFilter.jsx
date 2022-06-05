import { React, useState } from "react";
import ProjectAdsFilterData from "../data/ProjectAdsFilterData";
import "../style/ProjectAdsFilter.css";
import ProjectFilterOption from "./ProjectFilterOption";

function ProjectAdsFilter() {
  const [buttonClicked, setButtonClicked] = useState(false);
  function handleClick() {
    setButtonClicked(!buttonClicked);
  }

  return (
    <div className="projectad_container">
      <h2> Project Ads</h2>
      <h3>
        Find here all the project advertisements published by traditional
        artists, illustrators, museums, galleries, collectors and art lovers who
        are looking for digital artist(s) to animate physical artwork(s)
      </h3>

      {ProjectAdsFilterData.map((data) => (
        <section className="filter_button_container">
          <button
            className="filter_selection"
            type="button"
            onClick={handleClick}
          >
            {data.filter}
          </button>

          <ul>
            {buttonClicked
              ? data.option.map((list) => <ProjectFilterOption list={list} />)
              : ""}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default ProjectAdsFilter;
