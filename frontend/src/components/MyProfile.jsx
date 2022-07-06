import React from "react";

import "../style/ContactUs.css";
import { useForm } from "react-hook-form";
import UserType from "./UserType";
import SoftwareUse from "./SoftwareUse";
// eslint-disable-next-line import/no-extraneous-dependencies

export default function ContactUsForm() {
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
      <h3> You are...</h3>
      <UserType />
      <form className="form_qb" onSubmit={handleSubmit(onSubmit)}>
        <div className="form_message_qb">
          <label className="field_label_qb" htmlFor="messageInput">
            Your public presentation
            <textarea
              className="field_label_qb"
              name="descriptionInput"
              {...register("Message", { required: true })}
            />
            {errors.Message?.type === "required" && (
              <p className="description_required_qb">Description is required</p>
            )}
          </label>
        </div>
      </form>
      <h3> Your skills</h3>
      <h3> Software used</h3>
      <SoftwareUse />
      <h3> Your prefered type of contract</h3>
      <h3> Your art portofolio</h3>

      <button type="submit" value="send" className="button_form_qb yellow">
        + ADD
      </button>
    </section>
  );
}
