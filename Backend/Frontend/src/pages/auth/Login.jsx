import { Link } from "react-router-dom";
import image from "./img/logintwo.svg";
import logoR from "./img/logo.png";
import React, { useRef, useState } from "react";

export function Login () {

    const [error, setError] = useState();
    const [msgError, setMsgError] = useState();
    const emailRef = useRef();
    const passwordRef = useRef();
    
    function login() {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        fetch("http://localhost:3031/user/signin", {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({ email, password })
        }).then(res => res.json())
            .then(res => {
                if (res.status === "EXITOSO") {
                  {localStorage.setItem("token", res.token);}
                    { window.location.href = "/dashboard" }
                } else {
                    alert(res.message)
                    setError(true);
                    setMsgError(res.message);
                }
            })
    }

  

    return (
      <div className="content-all">
        <div className="ctn-form">
          <img src={logoR} alt="Logo ferremax" className="logo" />
          <h1 className="tittle">INICIAR SESIÓN</h1>
          <p>Ingrese al sistema si ya está registrado.</p>
          
          <form >
            <label htmlFor="">Correo electrónico</label>
            <input ref={emailRef} type="email" required />
            <span className="msg-error"></span>
            <label htmlFor="">Contraseña</label>
            <input ref={passwordRef} type="password" required />
            <span className="msg-error"></span>
            <br/>
            <input type="button" className="btn btn-primary" onClick={login} value="Iniciar Sesión" />
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

