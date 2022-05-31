import React from "react";

function Button({ buttonData }) {
  return (
    <button type="button" className={buttonData.style}>
      {buttonData.content}
    </button>
  );
}

export default Button;
