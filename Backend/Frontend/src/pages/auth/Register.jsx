import { Link } from "react-router-dom";
import image from "./img/login.svg";
import logoR from "./img/logo.png";
import React, { useRef, useState } from "react";

const Register = () => {

  const idNumberRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const cellphoneRef = useRef();
  const emailRef = useRef();
  const rolRef = useRef();
  const passwordRef = useRef();
  

  function guardar() {
    const idNumber = idNumberRef.current.value;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const cellphone = cellphoneRef.current.value;
    const email = emailRef.current.value;
    const rol = rolRef.current.value;
    const password = passwordRef.current.value;

    fetch("http://localhost:3031/user/signup", {
        headers: { "content-type": "application/json" },
        method: "POST",
        body: JSON.stringify({ idNumber, firstName, lastName, cellphone, email, rol, password })
    }).then(res => res.json())
        .then(res => {
            alert(res.message);
        })
}

  return (
    <div className="content-all-registrer">
      <div className="ctn-form">
        <img src={logoR} alt="Logo transflullanos" className="logo" />
        <h1 id="titulo_register">REGISTRARTE</h1>
        <p>Es rápido y fácil.</p>
        <form>
          <label htmlFor="">Número de Identificación</label>
          <input ref={idNumberRef} type="number" required />
          <label htmlFor="">Nombres</label>
          <input ref={firstNameRef} type="text" required id="name-text" />
          <label htmlFor="">Apellidos</label>
          <input ref={lastNameRef} type="text" required />
          <label htmlFor="">Teléfono</label>
          <input ref={cellphoneRef} type="number" />
          <label htmlFor="">Correo electrónico</label>
          <input ref={emailRef} type="email" required />
          <label htmlFor="rol-select" className="col-form-label">
            Rol
          </label>
          <select defaultValue={"DEFAULT"} name="rol" required>
            <option value="DEFAULT" disabled selected={false}>
              Elija una opción
            </option >
            <option ref={rolRef} value="Administrador">Administrador</option>
            <option ref={rolRef} value="Vendedor">Vendedor</option>
            <option ref={rolRef} value="Operario">Operario</option>
          </select>
          <label htmlFor="">Contraseña</label>
          <input ref={passwordRef} type="password" required />

          <input type="button" onClick={guardar} value="Registrarte" />
        </form>

        <span className="text-footer">
          ¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link>
        </span>
      </div>
      <div className="ctn-image">
        <img className="image" src={image} alt="" />
      </div>
    </div>
  );
};

export default Register;
