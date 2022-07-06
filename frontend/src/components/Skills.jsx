import React, { useState, useEffect } from "react";
import axios from "axios";

function Skills() {
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
    <div>
      {mySkill.map((skill) => (
        <button className="form_button" type="button" key={skill.id}>
          {skill.skills}
        </button>
      ))}
    </div>
  );
}

export default Skills;
