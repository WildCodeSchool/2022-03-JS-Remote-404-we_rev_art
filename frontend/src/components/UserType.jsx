/* import React, { useState, useEffect } from "react";
import axios from "axios";

import "../style/MyProfile.css";

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
      <div className="checkbox_container flex">
        {myProfile.map((usertypes) => (
          <label htmlFor={usertypes.usertype} key={usertypes.id}>
            {usertypes.usertype}
            <input
              id={usertypes.usertype}
              value={usertypes.id}
              type="checkbox"
            />
          </label>
        ))}
      </div>
    </div>
  );
}

export default UserType; */
