
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import React, { useRef, useState } from "react";

const UserExterno = () => {


  
  const idNumberRef = useRef();
  const clienteRef = useRef();
  const origenRef = useRef();
  const destinoRef = useRef();
  const createDateRef = useRef();
    

  function guardar() {
    const idNumber = idNumberRef.current.value;
    const cliente= clienteRef.current.value;
    const origen = origenRef.current.value;
    const destino = destinoRef.current.value;
    const createDate = createDateRef.current.value;
    

    fetch("http://localhost:3031/order/create", {
        headers: { "content-type": "application/json" },
        method: "POST",
        body: JSON.stringify({ idNumber, cliente, origen, destino, createDate })
    }).then(res => res.json())
        .then(res => {
            alert(res.message);limpiar()
        })
}



function limpiar() {
   idNumberRef.current.value = "";
   clienteRef.current.value = "";
   origenRef.current.value = "";
   destinoRef.current.value = "";
   createDateRef.current.value = "";
    
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
              
              <div className= "UserTitle">
                <br/>
              <h2 >Usuario Externo</h2>
               <h4 >Escoja qué ruta va a utilizar</h4>
               </div>
              <form>
              <div class="row">
                  <div class="col">
                   
                    <div class="form-outline">
                    <label htmlFor="">Destino</label>
                      <select name="" id="">
                      <option ref={destinoRef} value="Puerto A - Barranquilla">Puerto A - Barranquilla</option>
                      <option ref={destinoRef} value="Puerto B- Mar de Plata">Puerto B - Mar de Plata</option>
                      <option ref={destinoRef} value="Puerto C - Chocó">Puerto C - Chocó</option>
                      </select>
                    </div>
                  </div>
                  <div class="col">
                    
                    <div class="form-outline">
                    <label htmlFor="">Origen</label>
                    <select name="" id="">
                      <option ref={origenRef} value="Puerto D - El Concord">Puerto D - El Concord</option>
                      <option ref={origenRef} value="Puerto E- Malambo">Puerto E- Malambo</option>
                      <option ref={origenRef}  value="Puerto F - Montevideo">Puerto F - Montevideo</option>
                    </select>
                    </div>
                  </div>
                </div>

                <hr />

                <div class="row">
                  <div class="col">
                    
                    <div class="form-outline">
                      <input type="text" ref={clienteRef} id="form8Example3" class="form-control" />
                      <label class="form-label" for="form8Example3">Cliente</label>
                    </div>
                  </div>
                  <div class="col">
                    
                    <div class="form-outline">
                      <input type="text" ref={idNumberRef} id="form8Example4" class="form-control" />
                      <label class="form-label" for="form8Example4">Numero de Orden</label>
                    </div>
                  </div>
                  <div class="col">
                    
                    <div class="form-outline">
                      <input type="date" ref={createDateRef}  id="form8Example5" class="form-control" />
                      <label class="form-label" for="form8Example5">Fecha</label>
                    </div>
                  </div>
                </div>
                <div class="row">
                <div class="col">
                  <br/>
                <button className="btn btn-primary" type="button" >Consultar</button>
                </div>
                <br/>
                <div class="col">
                <br/>
                <button className="btn btn-primary" type="button"  >Modificar</button>           
                </div> 
                </div>
                <div class="row">
                <div class="col">
                <br/>
                <input className="btn btn-primary" type="button" onClick={guardar}  value="Guardar" />                   
                </div>
                <div class="col">
                <br/>
                <button className="btn btn-primary" type="button" >eliminar</button>           
                </div> 
              </div>
                </form>         
             
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

export default UserExterno;