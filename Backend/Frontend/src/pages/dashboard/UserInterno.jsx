import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

const UserInterno = () => {
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
            {/* <!-- Topbar --> */}
            <Topbar />
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
              {/* <!-- Page Heading --> */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                
              </div>
             

             <div className= "UserTitle">
             <h2 >Usuario interno</h2>
               <h4 >Añadir rutas</h4>
             </div>
             
             <div className="contentUser">
               <div className= "ContenedorInterno">
               <label htmlFor="">Puerto de origen</label>
                <input type="text" placeholder= "Nombre del puerto - País o Ciudad" maxLength= "40"/> <br />
                
                <span className="Number2"><label htmlFor="">Distancia en millas</label></span>
                <span className="Number" ><input className="Number" type="number" name="Millas náuticas" id="" /> 
                <button type="submit">Guardar</button>
                </span>
                
             </div>

             <div className= "ContenedorDestino">
             <label htmlFor="">Puerto de destino</label>
                <input type="text" placeholder= "Nombre del puerto - País o Ciudad" maxLength= "40"/> <br />
                
                <span className="Number2"><label htmlFor="">Costo x milla náutica</label></span>
                <span className="Number2" ><input type="number" name="Millas pagar" placeholder="Precio en dólares" /> <button type="submit">Cancelar</button>
                </span>
                
                
               
                
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

export default UserInterno;
