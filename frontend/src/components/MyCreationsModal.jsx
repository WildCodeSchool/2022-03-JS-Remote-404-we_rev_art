import React, { useState } from "react";
import "../style/button.css";
import MyCreationUpload from "./MyCreationUpload";

const defaultValue = 0;
const [counter, setCounter] = useState(defaultValue);

function MyCreationsModal() {
  return (
    <div>
      <h1>My Creations On werevart</h1>
      <div className="" />
      <MyCreationUpload />
      <div className="my_creation_allbtn">
        <button
          type="button"
          className="my_creation_savebtn"
          onClick={() => setCounter(counter + 1)}
        >
          SAVE
        </button>
        <button
          type="button"
          className="my_creation_modifybtn"
          onClick={() => setCounter(counter - 1)}
        >
          MODIFY
        </button>
      </div>
    </div>
  );
}

export default MyCreationsModal;
