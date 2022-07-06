import React, { useState, useEffect } from "react";
import axios from "axios";

function UserType() {
  const [myProfile, setMyProfile] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/usertype `)
      .then((res) => {
        setMyProfile(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      {myProfile.map((usertypes) => (
        <label htmlFor={usertypes.usertype} key={usertypes.id}>
          {usertypes.usertype}
          <input id={usertypes.usertype} value={usertypes.id} type="checkbox" />
        </label>
      ))}
    </div>
  );
}

export default UserType;
