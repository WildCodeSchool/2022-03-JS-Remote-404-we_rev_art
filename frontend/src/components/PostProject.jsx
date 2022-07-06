import React from "react";
import Skills from "./Skills";
import ContractTypes from "./ContractTypes";

function PostProject() {
  return (
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
          <div>
            <h2>Choose an animation technique</h2>
            <Skills />
          </div>
          <div>
            <h2>What type of contract?</h2>
            <ContractTypes />
          </div>
          <div>
            <h2>Who are you looking for?</h2>
          </div>
          <div>
            <h2>What is your budget?</h2>
          </div>
          <div>
            <h2>What is the timeframe of your project?</h2>
          </div>
        </div>
      </form>
    </section>
  );
}
export default PostProject;
