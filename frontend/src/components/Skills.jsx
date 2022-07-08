import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/MyProfile.css";

function Skills({ skills, handleSkills }) {
  const [mySkill, setMySkill] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/skills `)
      .then((res) => {
        setMySkill(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="software_all_buttons">
      {mySkill.map((skill) => (
        <button
          onClick={() => handleSkills(skill.id)}
          className={skills.includes(skill.id) ? "active" : "form_button"}
          type="button"
          key={skill.id}
        >
          {skill.skills}
        </button>
      ))}
    </div>
  );
}

export default Skills;
