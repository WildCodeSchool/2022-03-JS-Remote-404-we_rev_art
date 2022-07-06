import React from "react";
import "../style/PostAnAd.css";
// import { useForm } from "react-hook-form";

import MiniHeader from "../components/miniHeader";

function PostAnAd() {
  //   const {
  //     handleSubmit,
  //     reset,
  //     formState: { errors },
  //   } = useForm();

  //   const onSubmit = () => {
  //     console.warn("Your project was sent correctly");
  //     reset();
  //   };
  return (
    <div>
      <MiniHeader index={7} />
      {/* <h1>Describe your project in few words</h1> */}
      <section className="section_form2">
        <form className="form_eb">
          <div className="contact_form_eb">
            <label className="field_label_eb" htmlFor="nameInput">
              Describe your project in few words
              <textarea
                className="textarea_eb"
                name="Project"
                id=""
                cols="30"
                rows="2"
              />
              <p>50 caracters max</p>
            </label>
            <label className="field_label_eb" htmlFor="nameInput">
              Detail your need
              <input className="input_eb" type="text" name="nameInput" id="" />
              <p>1 000 caracters max</p>
            </label>
            <h2>Choose an animation technique</h2>
            <button className="button_eb" type="submit">
              Motion
            </button>
            <button className="button_eb" type="submit">
              2D
            </button>
            <button className="button_eb" type="submit">
              3D
            </button>
            <button className="button_eb" type="submit">
              VR
            </button>
            <button className="button_eb" type="submit">
              AR
            </button>
            <h2>What type of contract?</h2>
            <button className="button_eb" type="submit">
              PAID SERVICES
            </button>
            <button className="button_eb" type="submit">
              FREE COLLABORATION
            </button>
            <h2>Who are you looking for?</h2>
            <button className="button_eb" type="submit">
              SOLO ARTIST
            </button>
            <button className="button_eb" type="submit">
              MULTIPLE ARTISTS
            </button>
            <button className="button_eb" type="submit">
              STUDIO
            </button>
            <h2>What is your budget?</h2>
            <button className="button_eb" type="submit">
              NO BUDGET
            </button>
            <button className="button_eb" type="submit">
              LESS THAN 200€
            </button>
            <button className="button_eb" type="submit">
              200€ TO 1000€
            </button>
            <button className="button_eb" type="submit">
              1000€ TO 3000€
            </button>
            <button className="button_eb" type="submit">
              OVER 3000€
            </button>
            <h2>What is the timeframe of your project?</h2>
            <button className="button_eb" type="submit">
              URGENT
            </button>
            <button className="button_eb" type="submit">
              ONE MONTH
            </button>
            <button className="button_eb" type="submit">
              LONG-TERM
            </button>
            <button className="button_eb" type="submit">
              RECURRENT
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default PostAnAd;
