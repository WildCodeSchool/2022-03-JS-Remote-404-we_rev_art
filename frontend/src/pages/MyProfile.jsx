import React from "react";
import { Helmet } from "react-helmet-async";
import MiniHeader from "../components/miniHeader";
import MyProfileForm from "../components/MyProfileForm";

function MyProfile() {
  return (
    <div>
      <Helmet>
        <title>We Rev&apos;Art | Profile </title>
      </Helmet>
      <MiniHeader index={17} />
      <MyProfileForm />
    </div>
  );
}

export default MyProfile;
