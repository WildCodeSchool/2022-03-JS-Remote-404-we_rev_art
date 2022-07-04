import React, { useState } from "react";
import { Link } from "react-router-dom";

function ModalConnected({ setModal }) {
  const [accountType] = useState(false);
  return (
    <ul className="modal_connected">
      <Link to="/" className="modal_li" onClick={() => setModal(false)}>
        <button type="button" className="no_button">
          <li>My Account</li>
        </button>
      </Link>
      <Link to="/" className="modal_li" onClick={() => setModal(false)}>
        <button type="button" className="no_button">
          <li>{accountType ? "My project ads" : "My subscription"}</li>
        </button>
      </Link>
      <Link to="/" className="modal_li" onClick={() => setModal(false)}>
        <button type="button" className="no_button">
          <li>{accountType ? "My favourite artists" : "My profile"}</li>
        </button>
      </Link>
      <Link to="/" className="modal_li" onClick={() => setModal(false)}>
        <button type="button" className="no_button">
          <li>{accountType ? "" : "My creations"}</li>
        </button>
      </Link>
      <Link to="/" className="modal_li" onClick={() => setModal(false)}>
        <button type="button" className="no_button">
          <li>My invoices</li>
        </button>
      </Link>
      <Link to="/" className="modal_li" onClick={() => setModal(false)}>
        <button type="button" className="no_button">
          <li>Log out</li>
        </button>
      </Link>
    </ul>
  );
}

export default ModalConnected;
