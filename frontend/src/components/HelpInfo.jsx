import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import data from "../data/helpInfoData";
import sky from "../images/sky.jpg";
import "../style/FAQ.css";

function HelpInfo() {
  const [rows, setRowsOption] = useState(null);

  useEffect(() => {
    if (rows) {
      setTimeout(() => {
        rows[0].expand();
      }, 2500);

      setTimeout(() => {
        rows[0].close();
      }, 5000);

      setTimeout(() => {
        rows[0].scrollIntoView();
        // rows[0].scrollIntoView(true);
      }, 10000);
    }
  }, [rows]);

  return (
    <div>
      <img src={sky} alt="2dsky" />
      <h3 className="section-title">FAQ (how it works?)</h3>

      <div>
        <Faq data={data} getRowOptions={setRowsOption} />
      </div>
    </div>
  );
}

export default HelpInfo;
