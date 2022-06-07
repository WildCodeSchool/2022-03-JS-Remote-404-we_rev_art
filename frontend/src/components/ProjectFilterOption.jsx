import { React, useState } from "react";
import { Link } from "react-router-dom";

function ProjectFilterOption({ list }) {
  const [buttonClicked, setButtonClicked] = useState(false);
  function handleClick() {
    setButtonClicked(!buttonClicked);
  }
  return (
    <section className="XXXX">
      <button className="filter_selection" type="button" onClick={handleClick}>
        {list.filter}
      </button>

      <ul>
        {buttonClicked
          ? list.option.map((filteroptions) => (
              <Link to="/">
                <li className="filter_options"> {filteroptions}</li>
              </Link>
            ))
          : ""}
      </ul>
    </section>
  );
}

export default ProjectFilterOption;
