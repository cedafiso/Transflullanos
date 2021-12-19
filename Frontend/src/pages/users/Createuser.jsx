import { Link } from "react-router-dom";
import image from "../auth/img/login.svg";
import logoR from "../auth/img/logo.png";
import Sidebar from "../dashboard/components/Sidebar";
import React, { useRef, useState } from "react";


const Createuser = () => {

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
            alert(res.message);limpiar()
        })
}

function consultar() {
  const idNumber = idNumberRef.current.value;
  fetch(`http://localhost:3031/user/consultar`,{
    method: 'POST', // or 'PUT'
    body:JSON.stringify({idNumber}), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
  }})
      .then(res => res.json())
      .then(res => {
        firstNameRef.current.value = res.data.firstName;
        lastNameRef.current.value = res.data.lastName;
        cellphoneRef.current.value = res.data.cellphone;
        emailRef.current.value = res.data.email;
        rolRef.current.value = res.data.rol ;
        passwordRef.current.value = res.data.password;
        
      })
      .catch(error => alert(error));
}

function borrar() {

  const idNumber = idNumberRef.current.value;
  // Hacer petición AJAX (fecth) para consumir API
  fetch("http://localhost:3031/user/delete", {

    headers: { "content-type": "application/json" },
    method: "POST",
    body: JSON.stringify({ idNumber })
      })
      .then(data => data.json()) // Obtener los datos
      .then(data =>{ alert(data.message); limpiar()}) // Mostrar mensaje OK    :) 
      .catch(error => alert(error));  // Mostrar mensaje error :(
  }

  function editar() {
    // Capturar los datos
    const idNumber = idNumberRef.current.value;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const cellphone = cellphoneRef.current.value;
    const email = emailRef.current.value;
    const rol = rolRef.current.value;
    const password = passwordRef.current.value;
    // Hacer petición AJAX (fecth) para consumir API
    fetch("http://localhost:3031/user/edit", {
        headers: { "content-type": "application/json" },
        method: "POST",
        body: JSON.stringify({ idNumber, firstName, lastName, cellphone, email, rol, password })
    })
        .then(data => data.json()) // Obtener los datos
        .then(data =>{ alert(data.message); limpiar()})  // Mostrar mensaje OK    :) 
        .catch(error => alert(error));  // Mostrar mensaje error :(
}

function limpiar() {
  idNumberRef.current.value= "";
  firstNameRef.current.value= "";
  lastNameRef.current.value= "";
  cellphoneRef.current.value= "";
  emailRef.current.value= "";
  rolRef.current.value= "";
  passwordRef.current.value= "";
    }

  return (
    <React.Fragment>
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <Sidebar />
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            

            {/* <!-- Begin Page Content --> */}

            <div className="container-fluid">

              {/* <!-- Page Heading --> */}
              <div className="content-all-registrer">
                    <div className="">
                      <img src={logoR} alt="Logo transflullanos" className="logo" />
                      <h1  id="titulo_register">Usuarios</h1>
                      <form>
                        <div class="row">
                          <div class="col">
                          <label htmlFor="">Número de Identificación</label>
                          <input ref={idNumberRef} type="text" required />
                          </div>
                          <div class="col">
                          <label htmlFor="">Nombres</label>
                          <input ref={firstNameRef} type="text" required id="name-text" />             
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                          <label htmlFor="">Apellidos</label>
                          <input ref={lastNameRef} type="text" required />
                          </div>
                          <div class="col">
                          <label htmlFor="">Teléfono</label>
                          <input ref={cellphoneRef} type="number" />                    
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                          <label htmlFor="">Correo electrónico</label>
                          <input ref={emailRef} type="email" required />
                          </div>
                          <div class="col">
                          <label htmlFor=""> Rol</label>
                          <input ref={rolRef} type="email" required />                     
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                          <label htmlFor="">Contraseña</label>
                          <input ref={passwordRef} type="password" required />
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                          <br/>
                          <button className="btn btn-primary" type="button" onClick={consultar}>Consultar</button>
                          </div>
                          <br/>
                          <div class="col">
                          <br/>
                            <button className="btn btn-primary" type="button"  onClick={editar} >Modificar</button>           
                          </div> 
                        </div>
                        <div class="row">
                        <div class="col">
                          <br/>
                          <input className="btn btn-primary" type="button"  onClick={guardar} value="Guardar" />                   
                          </div>
                          <div class="col">
                          <br/>
                            <button className="btn btn-primary" type="button" onClick={borrar}>eliminar</button>           
                          </div> 
                        </div>
                      </form>
                    
                    </div>
                                
                  </div>  
             
              {/* Content page */}
              

              {/* <!-- Content Row --> */}
            </div>
            {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- End of Main Content --> */}
        </div>
        {/* <!-- End of Content Wrapper --> */}
      </div>
    </React.Fragment>
  );
};

export default Createuser;

