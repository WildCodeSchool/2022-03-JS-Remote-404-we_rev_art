import React from "react";
import { Link } from "react-router-dom";

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

      <form>
        <label htmlFor="email" className="field_label">
          Email address
          <input type="email" className="field_input" />
        </label>
        <label htmlFor="password" className="field_label">
          Password
          <input type="password" className="field_input" />
        </label>
        <div className="register_terms_container">
          <input type="checkbox" className="register_checkbox" />

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
