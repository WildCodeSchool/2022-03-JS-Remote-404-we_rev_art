import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/MyProfile.css";

function ContractTypes({ typeOfContrat, handleContrats }) {
  const [myContractType, setContractType] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/contracttype `)
      .then((res) => {
        setContractType(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="software_all_buttons">
      {myContractType.map((contract) => (
        <button
          onClick={() => handleContrats(contract.id)}
          className={
            typeOfContrat.includes(contract.id) ? "active" : "form_button"
          }
          type="button"
          key={contract.id}
        >
          {contract.contracttype}
        </button>
      ))}
    </div>
  );
}

export default ContractTypes;
