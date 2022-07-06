import React from "react";

import ContactUsForm from "../components/ContactUsForm";

import MiniHeader from "../components/miniHeader";
import MyProfile from "../components/MyProfile";

function ContactUs() {
  return (
    <div>
      <MiniHeader index={15} />
      <ContactUsForm />
      <MyProfile />
    </div>
  );
}

export default ContactUs;
