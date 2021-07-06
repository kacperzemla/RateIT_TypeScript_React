import Logo from "./Logo";

import { Link } from "react-router-dom";
import { useState } from "react";

import AuthService from "../services/auth.service.js";

function Activate() {
  const [mail, setMail] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    AuthService.activate(mail, code).then(
      (response: any) => {
        return setMessage(response.message);
      },
      (err: any) => {
        console.error(err);
        return setMessage("Wrong credentials or network problems.");
      }
    );
  };

  return (
    <div className="activateForm">
      <Logo />
      <div className="container">
        <Link className="goBack" to="/login">
          ←
        </Link>
        <h1>ACTIVATE ACCOUNT</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="inputLogin"
            id="mail"
            type="text"
            placeholder="Email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            required
          />
          <input
            className="inputLogin"
            id="code"
            type="text"
            placeholder="Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
          <input
            className="formButton"
            id="submitBtn"
            type="submit"
            value="SUBMIT"
          />
        </form>

        {message ? <p className="warningMessage">{message}</p> : ""}
      </div>
    </div>
  );
}

export default Activate;
