import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet";
import ExportContextUser from "../context/UserContext";
// import ArtistRegistration from "../components/ArtistRegistration";
// import CustomerRegistration from "../components/CustomerRegistration";
import MiniHeader from "../components/miniHeader";
import MyProfileForm from "../components/MyProfileForm";
import Logo from "../components/Logo";
import PersonalForm from "../components/MyProfile/Personal/PersonalForm";
import BillingForm from "../components/MyProfile/Billing/BillingForm";

function MyProfile() {
  const [personal, setPersonal] = useState(true);
  const [account, setAccount] = useState(false);
  const [billing, setBilling] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [choice, setChoice] = useState("personal");
  const { user } = useContext(ExportContextUser.UserContext);
  const [personalData, setPersonalData] = useState();
  const [billingData, setBillingData] = useState();

  const handleClick = (
    selected,
    notSelected1,
    notSelected2,
    notSelected3,
    choosing,
    selectedOption
  ) => {
    notSelected1(false);
    notSelected2(false);
    notSelected3(false);
    selected(true);
    choosing(selectedOption);
  };
  console.warn(user);
  console.warn(personalData);
  console.warn(billingData);
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
            className={billing ? "button_style3 selected2" : "button_style3"}
            onClick={() =>
              handleClick(
                setBilling,
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

        {choice === "account" && <MyProfileForm />}
        {choice === "personal" && (
          <PersonalForm setPersonalData={setPersonalData} />
        )}
        {choice === "billing" && (
          <BillingForm setPersonalData={setBillingData} />
        )}
        {choice === "notifications" && <Logo />}
      </div>
    </div>
  );
}

export default MyProfile;
