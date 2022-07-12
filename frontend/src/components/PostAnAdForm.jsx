import React, { useState } from "react";
// import axios from "axios";
import { useForm } from "react-hook-form";
import Skills from "./Skills";
import ContractTypes from "./ContractTypes";
import Budget from "./Budget";
import Timeframe from "./Timeframe";
import MyCreationUpload from "./MyCreationUpload";

function PostAnAdForm() {
  const [skills, setSkills] = useState("");
  const [typeOfContrat, setContractTypes] = useState([]);
  const [budget, setBudget] = useState([]);
  const [timeframe, setTimeframe] = useState([]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleSkills = (id) => {
    if (skills.includes(id)) {
      setSkills(skills.filter((skill) => skill !== id));
    } else {
      setSkills([...skills, id]);
    }
  };

  const handleContracts = (id) => {
    if (typeOfContrat.includes(id)) {
      setContractTypes(
        typeOfContrat.filter((contracttype) => contracttype !== id)
      );
    } else {
      setContractTypes([...typeOfContrat, id]);
    }
  };

  const handleBudget = (id) => {
    if (budget.includes(id)) {
      setBudget(budget.filter((budgets) => budgets !== id));
    } else {
      setBudget([...Budget, id]);
    }
  };

  const handleTimeframe = (id) => {
    if (timeframe.includes(id)) {
      setTimeframe(timeframe.filter((timeframes) => timeframes !== id));
    } else {
      setTimeframe([...timeframe, id]);
    }
  };

  const date = new Date();
  const date1 = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  const onSubmit = (data) => {
    const data2 = {
      ...data,
      skills_id: skills[0],
      budget_id: budget[0],
      timeframe_id: timeframe[0],
      contractype: typeOfContrat[0],
      date: date1,
    };
    console.warn(data2);
    // axios
    //   .get(`${import.meta.env.VITE_BACKEND_URL}/postanad `)
    //   .then((res) => {
    //     res.status(200);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };
  return (
    <section className="section_form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="profile_picture_upload">
          <MyCreationUpload />
        </div>
        <div className="flex-column">
          <label htmlFor="messageInput" className="profiledescription">
            Name of the project
            <input
              type="messageInput"
              className="field_input"
              {...register("title", { required: true })}
            />
            {errors.title && <p> title is required </p>}
          </label>
          <label htmlFor="messageInput" className="profiledescription">
            Details about your needs
            <textarea
              type="messageInput"
              className="field_input"
              {...register("details", { required: true })}
            />
            {errors.details && <p> Details is required </p>}
          </label>
          <label htmlFor="messageInput" className="profiledescription">
            Details about your needs
            <input
              placeholder="#painting #
            abstractArt #decorative #
            forest"
              type="messageInput"
              className="field_input"
              {...register("hashtag", { required: true })}
            />
            {errors.hashtag && <p> Hashtag is required </p>}
          </label>
        </div>
        <div className="paa_subcontainer">
          <h3 className="profile_h3">Choose an animation technique</h3>
          <Skills skills={skills} handleSkills={handleSkills} />
        </div>
        <div className="flex paa_subcontainer">
          <h3 className="profile_h3">What type of contract ?</h3>
          <ContractTypes
            typeOfContrat={typeOfContrat}
            handleContracts={handleContracts}
          />
        </div>
        <div className="flex paa_subcontainer">
          <h3 className="profile_h3">What is your budget ?</h3>
          <Budget budget={budget} handleBudget={handleBudget} />
        </div>
        <div className="flex paa_subcontainer">
          <h3 className="profile_h3">
            What is the timeframe of your project ?
          </h3>
          <Timeframe timeframe={timeframe} handleTimeframe={handleTimeframe} />
        </div>
        <button type="submit" className="button_style_paa2 yellow">
          Post your add
        </button>
      </form>
    </section>
  );
}
export default PostAnAdForm;
