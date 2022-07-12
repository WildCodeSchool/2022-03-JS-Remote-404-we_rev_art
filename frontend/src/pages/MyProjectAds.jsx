import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import MiniHeader from "../components/miniHeader";
import NewProject from "../components/NewProject";
import ExportContextUser from "../context/UserContext";

function MyProjectAds() {
  const { user } = useContext(ExportContextUser.UserContext);
  const [myProjectAds, setMyProjectAds] = useState([]);
  useEffect(() => {
    const url = `${import.meta.env.VITE_BACKEND_URL}/dashboard/projects/`;

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
      {user.typeaccount_id === 2
        ? myProjectAds.map((projet) => <NewProject project={projet} />)
        : "Loading in progress please wait"}
    </div>
  );
}

export default MyProjectAds;
