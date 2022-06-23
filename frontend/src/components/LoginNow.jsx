import React from "react";
import { useForm } from "react-hook-form";

function LoginNow() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.warn(data);
  };
  const passwordCurrent = watch("password", "");

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
        <label htmlFor="confirmed_password" className="field_label">
          Confirm your password
          <input
            type="password"
            className="field_input"
            {...register(
              "confirmed_password",
              {
                validate: (value) => value === passwordCurrent,
              },
              { message: "The passwords do not match" },
              { required: true }
            )}
          />
          {errors.confirmed_password && (
            <p> {errors.confirmed_password.message} </p>
          )}
        </label>
        <button type="submit" className="button-style empty_yellow">
          Continue
        </button>
      </form>
    </section>
  );
}

export default LoginNow;
