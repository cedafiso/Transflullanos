import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

const UserExterno = () => {
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
             <h2 >Usuario Externo</h2>
               <h4 >Escoja qué ruta va a utilizar</h4>
             </div>
             
             <div className="contentUser">
               <div className= "ContenedorExterno"> 
               <label htmlFor="">Puerto de entrada</label>
             <select name="" id="">
                   <option value="Puerto A - Barranquilla">Puerto A - Barranquilla</option>
                   <option value="Puerto B- Mar de Plata">Puerto B - Mar de Plata</option>
                   <option value="Puerto C - Chocó">Puerto C - Chocó</option>
                 </select>
             </div>

             <div className= "ContenedorDestinoEx">
             <label htmlFor="">Puerto de salida</label>
             <select name="" id="">
                   <option value="Puerto D - El Concord">Puerto D - El Concord</option>
                   <option value="Puerto E- Malambo">Puerto E- Malambo</option>
                   <option value="Puerto F - Montevideo">Puerto F - Montevideo</option>
                 </select>
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

export default UserExterno;