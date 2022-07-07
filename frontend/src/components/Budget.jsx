import React, { useState, useEffect } from "react";
import axios from "axios";

function Budget() {
  const [budgetType, setBudgetType] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/budget`)
      .then((res) => {
        setBudgetType(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      {budgetType.map((budgetTypes) => (
        <button className="form_button" type="button" key={budgetTypes.id}>
          {budgetTypes.budget}
        </button>
      ))}
    </div>
  );
}

export default Budget;
