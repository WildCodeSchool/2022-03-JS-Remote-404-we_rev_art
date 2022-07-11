import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import "../../../style/MyAccount.css";

function PersonalForm({ setPersonalData }) {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/profile/personalform`, data)
      .then((res) => {
        setPersonalData(res.data);
        navigate("/profile/personal");
      })
      .catch((err) => console.error(err));
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="myAccount_container_noMiniHeader"
    >
      <div className="field_container">
        <label htmlFor="firstname" className="field_label">
          <div>
            First Name
            <span className="field_span"> (required) </span>
          </div>
          <input
            type="text"
            className="field_input"
            placeholder="Enter your first name"
            {...register("firstname", { required: true })}
          />
        </label>
        <label htmlFor="lastname" className="field_label">
          <div>
            Last Name
            <span className="field_span"> (required) </span>
          </div>
          <input
            type="text"
            className="field_input"
            placeholder="Enter your last name"
            {...register("lastname", { required: true })}
          />
        </label>
        <label htmlFor="username" className="field_label">
          <div>
            User name
            <span className="field_span"> (required) </span>
          </div>
          <input
            type="text"
            className="field_input duo"
            placeholder="Enter your first user name"
            {...register("username", { required: true })}
          />
        </label>
        <label htmlFor="emailaddress" className="field_label">
          <div>
            Email address
            <span className="field_span"> (required) </span>
          </div>
          <input
            type="email"
            className="field_input duo"
            placeholder="Enter your first user name"
            {...register("emailadress", { required: true })}
          />
        </label>
        <label htmlFor="password" className="field_label">
          <div>
            Password
            <span className="field_span"> (required) </span>
          </div>
          <input
            type="password"
            className="field_input duo"
            placeholder="Enter your first user name"
            {...register("password", { required: true })}
          />
        </label>
      </div>
      <div className="register_buttons_container">
        <button type="submit" className="button-style yellow">
          Save
        </button>
      </div>
    </form>
  );
}

export default PersonalForm;
