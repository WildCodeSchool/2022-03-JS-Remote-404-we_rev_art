import React from "react";
import MyCreationsModal from "../components/MyCreationsModal";
import ContactUsForm from "../components/ContactUsForm";

import MiniHeader from "../components/miniHeader";

function ContactUs() {
  return (
    <div>
      <MiniHeader index={15} />
      <MyCreationsModal />
      <ContactUsForm />
    </div>
  );
}

export default ContactUs;
