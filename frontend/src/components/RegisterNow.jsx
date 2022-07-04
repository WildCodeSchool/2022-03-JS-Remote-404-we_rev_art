import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function RegisterNow({ artist, setArtist, customer, setCustomer }) {
  const handleClick = (yes, setYes, setNo) => {
    setNo(false);
    setYes(!yes);
  };

  const artistClassName = artist
    ? "button-style yellow"
    : "button-style empty_yellow";
  const customerClassName = customer
    ? "button-style yellow"
    : "button-style empty_yellow";

  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    if (customer || artist) {
      console.warn("account is already registered");
    } else {
      console.error("please choose a type account");
    }
    reset();
  };
  const passwordCurrent = watch("password", "");
  return (
    <section className="register_login_container">
      <h4 className="register_h4"> Register </h4>
      <p>
        You don&apos;t have an account yet? <br /> What kind of account do you
        want to create?
      </p>
      <section className="register_buttons_container">
        <div>
          <button
            type="button"
            className={customerClassName}
            onClick={() => handleClick(customer, setCustomer, setArtist)}
          >
            TRADITIONAL ARTIST
          </button>
          <p>I am looking for digital artists to animate my art</p>
        </div>
        <div>
          <button
            type="button"
            className={artistClassName}
            onClick={() => handleClick(artist, setArtist, setCustomer)}
          >
            DIGITAL ARTIST
          </button>
          <p>I am looking for physical artworks to animate</p>
        </div>
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
          <input
            type="password"
            className="field_input"
            {...register("password", { minLength: 8 }, { required: true })}
          />
          {errors.password && <p> Password is required </p>}
        </label>
        <label htmlFor="confirmed_password" className="field_label">
          Confirm your password
          <input
            type="password"
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
        <input
          type="checkbox"
          className="hidden"
          checked={customer}
          {...register("customer account")}
        />
        <button type="submit" className="button-style empty_yellow">
          Register
        </button>
      </form>
    </section>
  );
}

export default RegisterNow;
