import React from "react";

import "../style/MyProfile.css";

import { useForm } from "react-hook-form";
import UserType from "./UserType";
import SoftwareUse from "./SoftwareUse";
// eslint-disable-next-line import/no-extraneous-dependencies

export default function MyProfileForm() {
  /**
   * register permet d'enregistrer les informations de notre formulaire grâce au code :
   * {...register("Nom-de-variable", { required: true })} dans les input ligne 85/97/108/120
   * { required: true } Permet d'obliger l'utilisateur à rentrer une valeur dans l'input
   */
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.warn("your profil is created");
  };

  return (
    <section className="section_form">
      <h1>My profile</h1>
      <h3 className="profile_h3"> You are...</h3>
      <UserType />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
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
        </div>
      </form>
      <h3 className="profile_h3"> Your skills</h3>
      <h3 className="profile_h3"> Software used</h3>
      <SoftwareUse />
      <h3 className="profile_h3"> Your prefered type of contract</h3>
      <h3 className="profile_h3"> Your art portofolio</h3>

      <button type="submit" value="send" className="button_form_qb yellow">
        + ADD
      </button>
    </section>
  );
}
