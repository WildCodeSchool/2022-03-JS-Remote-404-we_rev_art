import React from "react";
import "../style/HelpInfo.css";
import helpInfoData from "../data/helpInfoData";

function HelpInfo() {
  return (
    <div className="helpinfo-container">
      {helpInfoData.map((data) => (
        <li className="helpinfo-li"> {data.question} </li>
      ))}
    </div>
  );
}

export default HelpInfo;
