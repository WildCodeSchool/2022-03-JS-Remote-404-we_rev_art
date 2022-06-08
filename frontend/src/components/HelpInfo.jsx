import React from "react";
import helpInfoData from "../data/helpInfoData";

function HelpInfo() {
  return (
    <div className="helpinfo-container">
      {helpInfoData.map((data) => (
        <li className="helpinfo-container"> {data.question} </li>
      ))}
    </div>
  );
}

export default HelpInfo;
