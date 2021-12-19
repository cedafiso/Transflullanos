
import Sidebar from "../dashboard/components/Sidebar";
import Topbar from "../dashboard/components/Topbar";
import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import './Users.css';

const Users = () => {

  const [listado, setListado] = useState([]);
  useEffect(() => {
      fetch("http://localhost:3031/user/lista", {
          method: "GET"
      }).then(res => res.json())
          .then(res => {
              setListado(res);

          })
  }, [])

  const Borrar = async (endpoint,data) =>{
  
    try {
      const response = await fetch(`http://localhost:3031/user/borrar/${endpoint}`,{
        headers: {
          "content-Type": "application/json",
        },
        method: "DELETE",
        body: JSON.stringify(data)
        
      });
      return response.json()
    }catch(error){
      return console.log(error);
    }
  }
 
  const handleBorrar =(id)=>{
    if (window.confirm("esta seguro que desea eliminar este Usuario?")){
      console.log("Delete Id:", id)
       Borrar(`${id}`);
    }
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
            <div>
              <br/>
            <h1  className="text-nowrap-width: 8rem;">Usuarios</h1>
            
            <br/>
              <Link className="btn btn-primary" to="/Createuser">Añadir usuario</Link>
            </div>
              {/* <!-- Page Heading --> */}
              
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                
              </div>
              <div className="table-responsive">
                        <table className="responsive-table  table-bordered ">
                            <thead>
                            
                            
                                <tr>
                                    <th scope="col">Identificacion</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Apellido</th>
                                    <th scope="col">Telefono</th>
                                    <th scope="col">Correo Electronico</th>
                                    <th scope="col">Rol</th>
                                    <th scope="col">Controles</th>
                                </tr>
                            
                            </thead>
                            <tbody>
                            {listado.map(users => 
                                  <tr>
                                  <td>{users.idNumber}</td>
                                  <td>{users.firstName}</td>
                                  <td>{users.lastName}</td>
                                  <td>{users.cellphone}</td>
                                  <td>{users.email}</td>
                                  <td>{users.rol}</td>
                                  <td><svg type="button" onClick={() =>handleBorrar(users._id)} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                      <rect x="0.559937" y="0.75" width="34.5" height="34.5" rx="3.5" fill="#F2F1F6" stroke="#2D3AB9"/>
                                      <path d="M11.8099 25C11.8099 26.1 12.7099 27 13.8099 27H21.8099C22.9099 27 23.8099 26.1 23.8099 25V13H11.8099V25ZM24.8099 10H21.3099L20.3099 9H15.3099L14.3099 10H10.8099V12H24.8099V10Z" fill="#4D4D4D" />
                                  </svg>
                                  {"   "}
                                
                                      <svg  xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                                          <rect x="1.05994" y="0.75" width="34.5" height="34.5" rx="3.5" fill="#F2F1F6" stroke="#2D3AB9" />
                                          <path d="M9.30994 23.2501V27.0001H13.0599L24.1199 15.9401L20.3699 12.1901L9.30994 23.2501ZM27.0199 13.0401C27.4099 12.6501 27.4099 12.0201 27.0199 11.6301L24.6799 9.29006C24.2899 8.90006 23.6599 8.90006 23.2699 9.29006L21.4399 11.1201L25.1899 14.8701L27.0199 13.0401Z" fill="#4D4D4D" />
                                      </svg>
                                  </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
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

export default Users;