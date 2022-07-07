import React, { useState, useEffect } from "react";
import axios from "axios";

import "../style/MyProfile.css";

import { useForm } from "react-hook-form";

import SoftwareUse from "./SoftwareUse";
import Skills from "./Skills";
import MyCreationUpload from "./MyCreationUpload";
import ContractTypes from "./ContractTypes";
// eslint-disable-next-line import/no-extraneous-dependencies

export default function MyProfileForm() {
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
  /**
   * register permet d'enregistrer les informations de notre formulaire grâce au code :
   * {...register("Nom-de-variable", { required: true })} dans les input ligne 85/97/108/120
   * { required: true } Permet d'obliger l'utilisateur à rentrer une valeur dans l'input
   */
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.warn(data);
    reset();
  };

  return (
    <section className="section_form">
      <h1>My profile</h1>
      <div className="profile_picture_upload">
        <MyCreationUpload />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="profile_h3"> You are...</h3>
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
        <label className="profiledescription " htmlFor="messageInput">
          Your public presentation
          <textarea
            className="profiledescription"
            name="descriptionInput"
            {...register("Message", { required: true })}
          />
          {errors.Message?.type === "required" && (
            <p className="message"> Description is required </p>
          )}
        </label>
        <h3 className="profile_h3"> Your skills</h3>
        <Skills />
        <h3 className="profile_h3"> Software used</h3>
        <SoftwareUse />
        <h3 className="profile_h3"> Your prefered type of contract</h3>
        <ContractTypes />
        <h3 className="profile_h3"> Your art portofolio</h3>

        <button type="submit" value="send" className="button_form_qb yellow">
          + ADD
        </button>
      </form>
    </section>
  );
}
