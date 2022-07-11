import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import MiniHeader from "../components/miniHeader";
import NewProject from "../components/NewProject";
import ExportContextUser from "../context/UserContext";
import CustomerRegistration from "../components/CustomerRegistration";

function MyProjectAds() {
  const { user } = useContext(ExportContextUser.UserContext);
  const [myProjectAds, setMyProjectAds] = useState();
  useEffect(() => {
    const url = `${import.meta.env.VITE_BACKEND_URL}/projects/mine`;

    axios
      .get(url)
      .then((res) => {
        setMyProjectAds(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>We Rev&apos;Art | MyProjects </title>
      </Helmet>
      <MiniHeader index={6} />
      {user.typeaccount_id === 2 ? (
        <NewProject project={myProjectAds} />
      ) : (
        <CustomerRegistration />
      )}
    </div>
  );
}

export default MyProjectAds;
