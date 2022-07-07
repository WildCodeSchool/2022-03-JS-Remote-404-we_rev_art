import React, { useState, useEffect } from "react";
import axios from "axios";

function Timeframe() {
  const [timeframeType, setTimeframeType] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/timeframe`)
      .then((res) => {
        setTimeframeType(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      {timeframeType.map((timeframeTypes) => (
        <button className="form_button" type="button" key={timeframeTypes.id}>
          {timeframeTypes.timeframe}
        </button>
      ))}
    </div>
  );
}

export default Timeframe;
