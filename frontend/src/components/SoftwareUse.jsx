import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/MyProfile.css";

function SoftwareUse() {
  const [buttonClicked, setButtonClicked] = useState(false);
  function handleClick() {
    setButtonClicked(!buttonClicked);
  }
  const [mysoftwareUse, mySoftwareUse] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/softwareused`)
      .then((res) => {
        mySoftwareUse(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="software_all_buttons">
      {mysoftwareUse.map((softwares) => (
        <button
          onClick={handleClick}
          className="softwarebuttons"
          type="button"
          key={softwares.id}
        >
          {softwares.software}
        </button>
      ))}
    </div>
  );
}

export default SoftwareUse;
