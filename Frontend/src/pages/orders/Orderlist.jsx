import Sidebar from "../dashboard/components/Sidebar";
import Topbar from "../dashboard/components/Topbar";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [listado, setListado] = useState([]);
  useEffect(() => {
    list();
  }, []);
  const list = () => {
    fetch("http://localhost:3031/order/lista", {
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
        `http://localhost:3031/order/borrar/${endpoint}`,
        {
          headers: {
            "content-Type": "application/json",
          },
          method: "DELETE",
          body: JSON.stringify(data),
        }
      );
      list();
      return response.json();
    } catch (error) {
      return console.log(error);
    }
  };

  const handleBorrar = (id) => {
    if (window.confirm("esta seguro que desea eliminar esta Orden?")) {
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
                  Usuario externo &nbsp;
                  <Link className="btn btn-primary" to="/Createorden">
                    Ingresar orden
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
                              <th scope="col">Numero de orden</th>
                              <th scope="col">Cliente</th>
                              <th scope="col">Fecha</th>
                              <th scope="col">Origen</th>
                              <th scope="col">Destino</th>
                              <th scope="col">Controles</th>
                            </tr>
                          </thead>
                          <tbody>
                            {listado.map((order) => (
                              <tr>
                                <td>{order.idNumber}</td>
                                <td>{order.cliente}</td>
                                <td>{order.createDate}</td>
                                <td>{order.origen}</td>
                                <td>{order.destino}</td>
                                <td>
                                  <button
                                    className="btn btn-danger btn-sm"
                                    title="Eliminar"
                                    onClick={() => handleBorrar(order._id)}
                                  >
                                    <i
                                      className="far fa-trash-alt"
                                      aria-hidden="true"
                                    ></i>
                                  </button>
                                  {"   "}

                                  <Link
                                    className="btn btn-sm btn-primary"
                                    to={"/edit-order/" + order._id}
                                    title="Editar"
                                  >
                                    <i
                                      className="fas fa-pencil-alt"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
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

export default Orders;
