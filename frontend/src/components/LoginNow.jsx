import React from "react";

function LoginNow() {
  return (
    <section className="register_login_container">
      <h4 className="register_h4"> Log in </h4>
      <p>I am a registered user and I would like to log into my account</p>
      <form action="">
        <label htmlFor="email" className="field_label">
          Email address
          <input type="email" className="field_input" />
        </label>
        <label htmlFor="password" className="field_label">
          Password
          <input type="password" className="field_input" />
        </label>
        <button type="submit" className="button-style empty_yellow">
          Continue
        </button>
      </form>
    </section>
  );
}

export default LoginNow;
