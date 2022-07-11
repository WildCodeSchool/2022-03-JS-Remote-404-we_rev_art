import React from "react";
import { Helmet } from "react-helmet";
import MiniHeader from "../components/miniHeader";
import MyProfileForm from "../components/MyProfileForm";

function MyProfile() {
  return (
    <div>
      <Helmet>
        <title>We Rev&apos;Art | Profile </title>
      </Helmet>
      <MiniHeader index={17} />
      <div className="flex">
        <section className="buttons_container">
          <button type="button" className="button_style3">
            Personal information
          </button>
          <button type="button" className="button_style3">
            Account description
          </button>
          <button type="button" className="button_style3">
            Business information
          </button>
          <button type="button" className="button_style3">
            Billing information
          </button>
          <button type="button" className="button_style3">
            Notifications
          </button>
        </section>

        <MyProfileForm />
      </div>
    </div>
  );
}

export default MyProfile;
