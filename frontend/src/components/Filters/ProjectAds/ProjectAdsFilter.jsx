import axios from "axios";
import { React, useState, useEffect } from "react";
import ProjectAdsFilterData from "../../../data/ProjectAdsFilterData";
import "../../../style/ProjectAdsFilter.css";
import ProjectFilterOption from "../ProjectFilterOption";

function ProjectAdsFilter({ filter, setFilter }) {
  const [filtersOption, setFiltersOption] = useState([]);
  const getFilters = async () => {
    const provisoirFilter = await Promise.all(
      ProjectAdsFilterData.map((filterdata) => {
        return axios
          .get(`${import.meta.env.VITE_BACKEND_URL}/filters/${filterdata.type}`)
          .then((res) => res.data);
      })
    );
    setFiltersOption(provisoirFilter);
    console.warn(filtersOption);
  };
  useEffect(() => {
    getFilters();
  }, []);
  return (
    <div className="projectad_container">
      <div className="buttonlist_map">
        {ProjectAdsFilterData.map((data) => (
          <ProjectFilterOption
            list={data}
            filter={filter}
            setFilter={setFilter}
            key={data.type}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectAdsFilter;
