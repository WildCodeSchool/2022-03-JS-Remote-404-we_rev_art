import React, { useState } from "react";
import MiniHeader from "../components/miniHeader";
import ArtistRegistration from "../components/ArtistRegistration";
import CustomerRegistration from "../components/CustomerRegistration";
import RegisterNow from "../components/RegisterNow";
import LoginNow from "../components/LoginNow";

import "../style/register.css";

function Register() {
  const [customer, setCustomer] = useState(false);
  const [artist, setArtist] = useState(false);
  const [registerButton, setRegisterButton] = useState(false);
  const [loginButton, setLoginButton] = useState(false);

  console.warn(customer);

  return (
    <section className="register_container">
      <MiniHeader index={4} />
      <section className="register_loginVsResgister_container">
        <RegisterNow
          artist={artist}
          setArtist={setArtist}
          customer={customer}
          setCustomer={setCustomer}
          setRegisterButton={setRegisterButton}
        />
        <p className="register_div_or">OR</p>
        <LoginNow setLoginButton={setLoginButton} />
      </section>

      {artist && (loginButton || registerButton) ? <ArtistRegistration /> : ""}
      {customer && (loginButton || registerButton) ? (
        <CustomerRegistration />
      ) : (
        ""
      )}
    </section>
  );
}
export default Register;
