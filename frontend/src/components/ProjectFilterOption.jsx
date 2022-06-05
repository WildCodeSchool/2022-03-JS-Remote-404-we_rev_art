import React from "react";
import { Link } from "react-router-dom";

function ProjectFilterOption({ list }) {
  return (
    <Link to>
      <li className="filter_options"> {list}</li>{" "}
    </Link>
  );
}

export default ProjectFilterOption;
