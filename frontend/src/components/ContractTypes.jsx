import React, { useState, useEffect } from "react";
import axios from "axios";

function ContractTypes({ contracttype, handleContractTypes }) {
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
          onClick={() => handleContractTypes(contracttype.id)}
          className={
            contracttype.includes(contracttype.id) ? "active" : "form_button"
          }
          type="button"
          key={contracttype.id}
        >
          {contracttypes.contracttype}
        </button>
      ))}
    </div>
  );
}

export default ContractTypes;
