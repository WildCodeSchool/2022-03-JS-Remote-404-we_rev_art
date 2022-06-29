import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import ExportContextUser from "../context/UserContext";

function LoginNow() {
  const { setUser } = useContext(ExportContextUser.UserContext);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/user/login`, data)
      .then((res) => {
        setUser(res.data);
        navigate("/My_Project_Ads");
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className="register_login_container">
      <h4 className="register_h4"> Log in </h4>
      <p>I am a registered user and I would like to log into my account</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email" className="field_label">
          Email address
          <input
            type="email"
            className="field_input"
            {...register("email", { required: true })}
          />
          {errors.email && <p> Email is required </p>}
        </label>
        <label htmlFor="password" className="field_label">
          Password
          <input
            type="password"
            className="field_input"
            {...register("password", { minLength: 8 }, { required: true })}
          />
          {errors.password && <p> Password is required </p>}
        </label>

        <button type="submit" className="button-style empty_yellow">
          Continue
        </button>
      </form>
    </section>
  );
}

export default LoginNow;
