import React from "react";
import { Link } from "react-router-dom";
import image from "./img/logintwo.svg";
import logoR from "./img/logo.png";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange(event) {
    this.setState({ username: "", password: "" });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="content-all">
        <div className="ctn-form">
          <img src={logoR} alt="Logo ferremax" className="logo" />
          <h1 className="tittle">INICIAR SESIÓN</h1>
          <p>Ingrese al sistema si ya está registrado.</p>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="">Correo electrónico</label>
            <input type="email" required />
            <span className="msg-error"></span>
            <label htmlFor="">Contraseña</label>
            <input type="password" required />
            <span className="msg-error"></span>
            <input type="submit" value="Iniciar Sesión" />
          </form>

          <span className="text-footer">
            ¿Aún no te has registrado? <Link to="/register">Regístrate</Link>
          </span>
        </div>

        <div className="ctn-image">
          <img className="image" src={image} alt="" />
        </div>
      </div>
    );
  }
}
