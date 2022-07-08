import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/MyProfile.css";

function ContractTypes({ typeOfContrat, handleContractTypes }) {
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
    <div>
      {myContractType.map((contracttypes) => (
        <button
          onClick={() => handleContractTypes(typeOfContrat.id)}
          className={
            typeOfContrat.includes(typeOfContrat.id) ? "active" : "form_button"
          }
          type="button"
          key={contracttypes.id}
        >
          {contracttypes.contracttype}
        </button>
      ))}
    </div>
  );
}

export default ContractTypes;
