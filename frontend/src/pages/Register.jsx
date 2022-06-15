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

  console.warn(customer);

  return (
    <section className="register_container">
      <section className="register_loginVsResgister_container">
        <RegisterNow
          artist={artist}
          setArtist={setArtist}
          customer={customer}
          setCustomer={setCustomer}
        />
        <p className="register_div_or">OR</p>
        <LoginNow />
      </section>

      <MiniHeader index={4} />

      {artist ? <ArtistRegistration /> : ""}
      {customer ? <CustomerRegistration /> : ""}
    </section>
  );
}
export default Register;
