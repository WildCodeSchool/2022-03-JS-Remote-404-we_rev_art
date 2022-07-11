import React, { useState } from "react";
import { Helmet } from "react-helmet";
import MiniHeader from "../components/miniHeader";
import MyProfileForm from "../components/MyProfileForm";

function MyProfile() {
  const [personal, setPersonal] = useState(false);
  const [account, setAccount] = useState(false);
  const [business, setBusiness] = useState(false);
  const [billing, setBilling] = useState(false);
  const [notifications, setNotifications] = useState(false);

  const handleClick = (
    selected,
    notSelected1,
    notSelected2,
    notSelected3,
    notSelected4
  ) => {
    notSelected1(false);
    notSelected2(false);
    notSelected3(false);
    notSelected4(false);
    selected(true);
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
                setNotifications
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
                setNotifications
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
                setNotifications
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
                setNotifications
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
                setPersonal
              )
            }
          >
            Notifications
          </button>
        </section>

        <MyProfileForm />
      </div>
    </div>
  );
}

export default MyProfile;
