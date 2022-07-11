import React, { useState } from "react";
import { Helmet } from "react-helmet";
import MiniHeader from "../components/miniHeader";
import MyProfileForm from "../components/MyProfileForm";
import Logo from "../components/Logo";

function MyProfile() {
  const [personal, setPersonal] = useState(false);
  const [account, setAccount] = useState(false);
  const [business, setBusiness] = useState(false);
  const [billing, setBilling] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [choice, setChoice] = useState("");

  const handleClick = (
    selected,
    notSelected1,
    notSelected2,
    notSelected3,
    notSelected4,
    choosing,
    selectedOption
  ) => {
    notSelected1(false);
    notSelected2(false);
    notSelected3(false);
    notSelected4(false);
    selected(true);
    choosing(selectedOption);
  };

  return (
    <div>
      <Helmet>
        <title>We Rev&apos;Art | Profile </title>
      </Helmet>
      <MiniHeader index={17} />
      <div className="flex">
        <section className="buttons_container">
          <button
            type="button"
            className={personal ? "button_style3 selected2" : "button_style3"}
            onClick={() =>
              handleClick(
                setPersonal,
                setAccount,
                setBusiness,
                setBilling,
                setNotifications,
                setChoice,
                "personal"
              )
            }
          >
            Personal information
          </button>
          <button
            type="button"
            className={account ? "button_style3 selected2" : "button_style3"}
            onClick={() =>
              handleClick(
                setAccount,
                setPersonal,
                setBusiness,
                setBilling,
                setNotifications,
                setChoice,
                "account"
              )
            }
          >
            Account description
          </button>
          <button
            type="button"
            className={business ? "button_style3 selected2" : "button_style3"}
            onClick={() =>
              handleClick(
                setBusiness,
                setAccount,
                setPersonal,
                setBilling,
                setNotifications,
                setChoice,
                "business"
              )
            }
          >
            Business information
          </button>
          <button
            type="button"
            className={billing ? "button_style3 selected2" : "button_style3"}
            onClick={() =>
              handleClick(
                setBilling,
                setBusiness,
                setAccount,
                setPersonal,
                setNotifications,
                setChoice,
                "billing"
              )
            }
          >
            Billing information
          </button>
          <button
            type="button"
            className={
              notifications ? "button_style3 selected2" : "button_style3"
            }
            onClick={() =>
              handleClick(
                setNotifications,
                setBilling,
                setBusiness,
                setAccount,
                setPersonal,
                setChoice,
                "notifications"
              )
            }
            on
          >
            Notifications
          </button>
        </section>

        {choice === "personal" && <Logo />}
        {choice === "account" && <Logo />}
        {choice === "business" && <Logo />}
        {choice === "billing" && <Logo />}
        {choice === "notifications" && <Logo />}

        <MyProfileForm />
      </div>
    </div>
  );
}

export default MyProfile;
