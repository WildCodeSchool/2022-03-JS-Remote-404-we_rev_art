import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/MyProfile.css";

function SoftwareUse({ soft, handleSoft }) {
  const [mysoftwareUse, setMySoftwareUse] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/softwareused`)
      .then((res) => {
        setMySoftwareUse(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="software_all_buttons">
      {mysoftwareUse.map((softwares) => (
        <button
          onClick={() => handleSoft(softwares.id)}
          className={soft.includes(softwares.id) ? "active" : "form_button"}
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
