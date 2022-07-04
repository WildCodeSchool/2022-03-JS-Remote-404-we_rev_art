import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ExportContextUser from "../context/UserContext";

function ModalConnected({ setModal }) {
  const { user } = useContext(ExportContextUser.UserContext);
  const customer = [
    "My account",
    "My project ads",
    "My favourite artists",
    "My invoices",
    "Log out",
  ];

  const artist = [
    "My account",
    "My subscription",
    "My profile",
    "My creations",
    "My invoices",
    "Log out",
  ];

  const typeAccount = user.typeaccount_id === 1 ? artist : customer;
  return (
    <ul className="modal_connected">
      {typeAccount.map((el) => (
        <Link to="/" className="modal_li" onClick={() => setModal(false)}>
          <button type="button" className="no_button">
            <li> {el}</li>
          </button>
        </Link>
      ))}
    </ul>
  );
}

export default ModalConnected;
