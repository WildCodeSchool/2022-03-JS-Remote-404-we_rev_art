import React from "react";
import { Helmet } from "react-helmet";
import MiniHeader from "../components/miniHeader";
import RegisterNow from "../components/RegisterNow";
import LoginNow from "../components/LoginNow";

import "../style/register.css";
import "../style/Field.css";

function Register() {
  return (
    <section className="register_container">
      <Helmet>
        <title>We Rev&apos;Art | Register-Login </title>
      </Helmet>
      <MiniHeader index={4} />
      <section className="register_loginVsResgister_container">
        <RegisterNow />
        <p className="register_div_or">OR</p>
        <LoginNow />
      </section>
    </section>
  );
}
export default Register;
