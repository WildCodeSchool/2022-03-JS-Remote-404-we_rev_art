import "../style/ContactUs.css";

import { useForm } from "react-hook-form";
// eslint-disable-next-line import/no-extraneous-dependencies

export default function ContactUsForm() {
  /**
   * register permet d'enregistrer les informations de notre formulaire grâce au code :
   * {...register("Nom-de-variable", { required: true })} dans les input ligne 85/97/108/120
   * { required: true } Permet d'obliger l'utilisateur à rentrer une valeur dans l'input
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /**
   *
   * @param {string :adresse email} serviceId
   * @param {template : mise en forme de l'email} templateId
   * @param {object : data form} variables
   * la fonction sendEmail va envoyer toutes les informations du formulaire (variables) pour
   * l'envoyer a emailJS sur l'adresse mail teammiditrente (serviceId) et le mettre
   * enforme grace au templateId
   */

  return (
    <div className="contact_form_qb">
      <h1>Contactez-nous </h1>
      <form>
        <label className="contact_label_qb" htmlFor="nameInput">
          Name :
          <input
            className="contact_input_qb"
            type="text"
            name="nameInput"
            {...register("Name", { required: true })}
          />
          {/* Si le champ n'est pas rempli, on indique à l'utilisateur que ce champ est requis. */}
          {errors.Name?.type === "required" && (
            <p className="contact_required_qb">Name is required</p>
          )}
        </label>
        <label className="contact_label_qb" htmlFor="emailInput">
          Email :
          <input
            className="contact_input_qb"
            type="text"
            name="emailInput"
            {...register("Email", { required: true })}
          />
          {errors.Email?.type === "required" && (
            <p className="contact_required_qb">Email is required</p>
          )}
        </label>
        <label className="contact_label_qb" htmlFor="sujetlInput">
          Quel est le sujet ?
          <input
            className="contact_input_qb"
            type="text"
            name="sujetlInput"
            {...register("Sujet", { required: true })}
          />
          {errors.Sujet?.type === "required" && (
            <p className="contact_required_qb">Sujet is required</p>
          )}
        </label>
        <label className="contact_label_qb" htmlFor="messageInput">
          Message :
          <textarea
            className="contact_textaera_qb"
            name="messageInput"
            rows="6"
            cols="50"
            {...register("Message", { required: true })}
          />
          {errors.Message?.type === "required" && (
            <p className="contact_required_qb">Message is required</p>
          )}
        </label>
        <button type="submit" value="send" className="button_form_qb">
          submit{handleSubmit}
        </button>
      </form>
    </div>
  );
}
