import React, { useState } from "react";
import Skills from "./Skills";
import ContractTypes from "./ContractTypes";
import Budget from "./Budget";
import Timeframe from "./Timeframe";

function PostProject() {
  const [skills, setSkills] = useState([]);
  const handleSkills = (id) => {
    if (skills.includes(id)) {
      setSkills(skills.filter((skill) => skill !== id));
    } else {
      setSkills([...skills, id]);
    }
  };

  return (
    <section className="section_form2">
      <form className="form_eb">
        <div className="contact_form_eb">
          <label className="field_label_eb" htmlFor="nameInput">
            Describe your project in few words
            <input className="input_eb" type="text" name="nameInput" id="" />
            <p>50 caracters max</p>
          </label>
          <label className="field_label_eb" htmlFor="nameInput">
            Detail your need
            <textarea
              className="textarea_eb"
              name="Project"
              id=""
              cols="30"
              rows="2"
            />
            <p>1 000 caracters max</p>
          </label>
          <div>
            <h2>Choose an animation technique</h2>
            <Skills skills={skills} handleSkills={handleSkills} />
          </div>
          <div>
            <h2>What type of contract?</h2>
            <ContractTypes />
          </div>
          <div>
            <h2>What is your budget?</h2>
            <Budget />
          </div>
          <div>
            <h2>What is the timeframe of your project?</h2>
            <Timeframe />
          </div>
        </div>
      </form>
    </section>
  );
}
export default PostProject;
