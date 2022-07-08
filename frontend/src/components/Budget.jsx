import React, { useState, useEffect } from "react";
import axios from "axios";

function Budget({ budget, handleBudget }) {
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
      {budgetType.map((budgets) => (
        <button
          onClick={() => handleBudget(budget.id)}
          className={budget.includes(budget.id) ? "active" : "form_button"}
          type="button"
          key={budget.id}
        >
          {budgets.budget}
        </button>
      ))}
    </div>
  );
}

export default Budget;
