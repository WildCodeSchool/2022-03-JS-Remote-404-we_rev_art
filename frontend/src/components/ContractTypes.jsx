import React, { useState, useEffect } from "react";
import axios from "axios";

function ContractTypes() {
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
      {myContractType.map((ContractType) => (
        <button className="form_button" type="button" key={ContractType.id}>
          {ContractType.contracttype}
        </button>
      ))}
    </div>
  );
}

export default ContractTypes;
