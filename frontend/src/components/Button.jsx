/* eslint-disable react/prop-types */
import React from "react";

// eslint-disable-next-line react/prop-types
function Button({ buttonData }) {
  return (
    <button type="button" className={buttonData.style}>
      {buttonData.content}
    </button>
  );
}

export default Button;
