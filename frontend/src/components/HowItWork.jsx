import React from "react";
import TitleText from "./TitleText";
import titleTextData2 from "../data/titleTextData2";

function HowItWork() {
  return (
    <section>
      <h2 className="style_h2">How does it work?</h2>
      <TitleText titleTextData={titleTextData2} />
    </section>
  );
}

export default HowItWork;
