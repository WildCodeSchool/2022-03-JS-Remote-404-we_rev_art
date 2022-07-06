import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

import hide from "../images/hide.png";
import show from "../images/show.png";

function RegisterNow({ artist, setArtist, customer, setCustomer }) {
  const [registerButton, setRegisterButton] = useState([]);

  const handleClick = (index) => {
    if (index === 0) {
      setArtist(true);
      setCustomer(false);
    } else {
      setArtist(false);
      setCustomer(true);
    }
  };

  const artistClassName = artist
    ? "button-style yellow"
    : "button-style empty_yellow";
  const customerClassName = customer
    ? "button-style yellow"
    : "button-style empty_yellow";

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/typeaccount `)
      .then((res) => {
        setRegisterButton(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let data2 = {};
    const { email } = data;
    const { password } = data;
    if (customer) {
      data2 = { email, password, typeaccount_id: 2 };
    } else {
      data2 = { email, password, typeaccount_id: 1 };
    }
    reset();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/user/signin`, data2)
      .then(() => {
        console.warn("User signin successful");
      })
      .catch((err) => console.error(err));
  };
  const passwordCurrent = watch("password", "");
  const [shown, setShown] = useState(false);
  return (
    <section className="register_login_container">
      <h4 className="register_h4"> Register </h4>
      <p>
        You don&apos;t have an account yet? <br /> What kind of account do you
        want to create?
      </p>
      <section className="register_buttons_container">
        {registerButton.map((btn, index) => (
          <div key={btn.id}>
            <button
              type="button"
              className={index === 1 ? customerClassName : artistClassName}
              onClick={() => handleClick(index)}
            >
              {btn.type}
            </button>
            {btn.id === 1 ? (
              <p>I am looking for physical artworks to animate</p>
            ) : (
              <p>I am looking for digital artists to animate my art</p>
            )}
          </div>
        ))}
      </section>

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
          <div className="flex">
            <input
              type={shown ? "text" : "password"}
              className="field_input"
              {...register("password", { minLength: 8 }, { required: true })}
            />
            <button
              type="button"
              className="no_button"
              onClick={() => setShown(!shown)}
            >
              <img
                src={shown ? show : hide}
                alt="eye that changes if password is shown or hidden"
              />
            </button>
          </div>
          {errors.password && <p> Password is required </p>}
        </label>
        <label htmlFor="confirmed_password" className="field_label">
          Confirm your password
          <div className="flex">
            <input
              type={shown ? "text" : "password"}
              className="field_input"
              {...register(
                "confirmed_password",
                {
                  validate: (value) =>
                    value === passwordCurrent || "The passwords do not match",
                },
                { required: true }
              )}
            />
            <button
              type="button"
              className="no_button"
              onClick={() => setShown(!shown)}
            >
              <img
                src={shown ? show : hide}
                alt="eye that changes if password is shown or hidden"
              />
            </button>
          </div>
          {errors.confirmed_password && (
            <p> {errors.confirmed_password.message} </p>
          )}
        </label>
        <div className="register_terms_container">
          <input
            type="checkbox"
            className="register_checkbox"
            {...register("terms", { required: true })}
          />
          {errors.terms && <p> You must accept terms and conditions </p>}
          <p>
            I agree with the <Link to="/">terms and conditions </Link>
          </p>
        </div>
        <button type="submit" className="button-style empty_yellow">
          Register
        </button>
      </form>
    </section>
  );
}

export default RegisterNow;
