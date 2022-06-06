import React from "react";

function Button({ buttonData }) {
  const cls = `${buttonData.style} button-style`;
  return (
    <button type="button" className={cls}>
      {buttonData.content}
    </button>
  );
}

export default Button;
