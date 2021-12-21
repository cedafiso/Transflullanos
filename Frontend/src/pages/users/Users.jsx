import Sidebar from "../dashboard/components/Sidebar";
import Topbar from "../dashboard/components/Topbar";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [listado, setListado] = useState([]);
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = () => {
    fetch("http://localhost:3031/user/lista", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setListado(res);
      });
  };

  const Borrar = async (endpoint, data) => {
    try {
      const response = await fetch(
        `http://localhost:3031/user/borrar/${endpoint}`,
        {
          headers: {
            "content-Type": "application/json",
          },
          method: "DELETE",
          body: JSON.stringify(data),
        }
      );
      fetchUser();
      return response.json();
    } catch (error) {
      return console.log(error);
    }
  };

  const handleBorrar = (id) => {
    if (window.confirm("esta seguro que desea eliminar este Usuario?")) {
      console.log("Delete Id:", id);
      Borrar(`${id}`);
    }
  };

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
            <Topbar />
            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-left mb-4">
                <h1 className="h3 mb-0 text-gray-800">
                  Usuarios &nbsp;
                  <Link className="btn btn-primary" to="/Createuser">
                    Añadir usuario
                  </Link>
                </h1>
              </div>
              {/* <!-- Page Heading --> */}

              <div className="row pt-5">
                <div className="col-md-12">
                  <div className="tile">
                    <div className="tile-body">
                      <div className="table-responsive">
                        <table className="table table-striped table-hover ">
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
                            {listado.map((users) => (
                              <tr>
                                <td>{users.idNumber}</td>
                                <td>{users.firstName}</td>
                                <td>{users.lastName}</td>
                                <td>{users.cellphone}</td>
                                <td>{users.email}</td>
                                <td>{users.rol}</td>
                                <td>
                                  {"   "}
                                  <button
                                    className="btn btn-danger btn-sm"
                                    title="Eliminar"
                                    onClick={() => handleBorrar(users._id)}
                                  >
                                    <i
                                      className="far fa-trash-alt"
                                      aria-hidden="true"
                                    ></i>
                                  </button>
                                  {"   "}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
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

export default Users;
