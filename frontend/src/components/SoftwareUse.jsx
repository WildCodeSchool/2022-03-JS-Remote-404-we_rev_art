import React, { useState, useEffect } from "react";
import axios from "axios";

function SoftwareUse() {
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
    <div className="my_profile_button">
      {mysoftwareUse.map((softwares) => (
        <button className="xx" type="button" key={softwares.id}>
          {softwares.software}
        </button>
      ))}
    </div>
  );
}

export default SoftwareUse;
