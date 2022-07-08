import React, { useContext } from "react";
import ExportContextUser from "../context/UserContext";
import ArtistRegistration from "../components/ArtistRegistration";
import CustomerRegistration from "../components/CustomerRegistration";
import MiniHeader from "../components/miniHeader";

function MyAccount() {
  const { user } = useContext(ExportContextUser.UserContext);
  return (
    <div>
      <MiniHeader index={16} />
      {user.typeaccount_id === 1 ? (
        <CustomerRegistration />
      ) : (
        <ArtistRegistration />
      )}
    </div>
  );
}

export default MyAccount;
