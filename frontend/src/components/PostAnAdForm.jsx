import React, { useState } from "react";
import "../style/MyProfile.css";

import Skills from "./Skills";
import ContractTypes from "./ContractTypes";
import Budget from "./Budget";
import Timeframe from "./Timeframe";
import MyCreationUpload from "./MyCreationUpload";

function PostAnAdForm() {
  const [description, setDescription] = useState("");
  const [detail, setDetail] = useState("");
  const [skills, setSkills] = useState([]);
  const [contracttypes, setContractTypes] = useState([]);
  const [budget, setBudget] = useState([]);
  const [timeframe, setTimeframe] = useState([]);

  const handleSkills = (id) => {
    if (skills.includes(id)) {
      setSkills(skills.filter((skill) => skill !== id));
    } else {
      setSkills([...skills, id]);
    }
  };

  const handleContractTypes = (id) => {
    if (contracttypes.includes(id)) {
      setContractTypes(
        contracttypes.filter((contracttype) => contracttype !== id)
      );
    } else {
      setContractTypes([...contracttypes, id]);
    }
  };

  const handleBudget = (id) => {
    if (budget.includes(id)) {
      setBudget(Budget.filter((budgets) => budgets !== id));
    } else {
      setBudget([...budget, id]);
    }
  };

  const handleTimeframe = (id) => {
    if (timeframe.includes(id)) {
      setTimeframe(timeframe.filter((timeframes) => timeframes !== id));
    } else {
      setTimeframe([...timeframe, id]);
    }
  };

  return (
    <section className="section_form">
      <div className="profile_picture_upload">
        <MyCreationUpload />
      </div>
      <label className="profiledescription " htmlFor="messageInput">
        Describe your project in few words
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="profiledescription"
          name="descriptionInput"
        />
      </label>
      <label className="profiledescription " htmlFor="messageInput">
        Detail your need
        <textarea
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          className="profiledescription"
          name="descriptionInput"
        />
      </label>
      <div>
        <h3 className="profile_h3">Choose an animation technique</h3>
        <Skills skills={skills} handleSkills={handleSkills} />
      </div>
      <div>
        <h3 className="profile_h3">What type of contract ?</h3>
        <ContractTypes
          contracttype={contracttypes}
          handleContractTypes={handleContractTypes}
        />
      </div>
      <h3 className="profile_h3">What is your budget ?</h3>
      <Budget budget={budget} handleBudget={handleBudget} />
      <h3 className="profile_h3">What is the timeframe of your project ?</h3>
      <Timeframe timeframe={timeframe} handleTimeframe={handleTimeframe} />
    </section>
  );
}
export default PostAnAdForm;
