import React from "react";
import "../style/PostAnAd.css";
// import { useForm } from "react-hook-form";
import MiniHeader from "../components/miniHeader";
import Skills from "../components/Skills";
import ContractTypes from "../components/ContractTypes";
import Budget from "../components/Budget";
import Timeframe from "../components/Timeframe";

function PostAnAd() {
  return (
    <div>
      <MiniHeader index={7} />
      <section className="section_form2">
        <form className="form_eb">
          <div className="contact_form_eb">
            <label className="field_label_eb" htmlFor="nameInput">
              Describe your project in few words
              <input className="input_eb" type="text" name="nameInput" id="" />
              <p>50 caracters max</p>
            </label>
            <label className="field_label_eb" htmlFor="nameInput">
              Detail your need
              <textarea
                className="textarea_eb"
                name="Project"
                id=""
                cols="30"
                rows="2"
              />
              <p>1 000 caracters max</p>
            </label>
            <div>
              <h2>Choose an animation technique</h2>
              <Skills />
            </div>
            <div>
              <h2>What type of contract?</h2>
              <ContractTypes />
            </div>
            <div>
              <h2>What is your budget?</h2>
              <Budget />
            </div>
            <div>
              <h2>What is the timeframe of your project?</h2>
              <Timeframe />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default PostAnAd;
