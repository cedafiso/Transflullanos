import Sidebar from "../dashboard/components/Sidebar";
import Topbar from "../dashboard/components/Topbar";
import React, { useRef } from "react";

const EditarOrden = () => {
  const idNumberRef = useRef();
  const clienteRef = useRef();
  const origenRef = useRef();
  const destinoRef = useRef();
  const createDateRef = useRef();

  function consultar() {
    const idNumber = idNumberRef.current.value;
    fetch("http://localhost:3031/order/consultar/", {
      method: "POST", // or 'PUT'
      body: JSON.stringify({ idNumber }), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        origenRef.current.value = res.data.origen;
        destinoRef.current.value = res.data.destino;
        clienteRef.current.value = res.data.cliente;
        createDateRef.current.value = res.data.createData;
      })
      .catch((error) => alert(error));
  }

  function editar() {
    // Capturar los datos
    const idNumber = idNumberRef.current.value;
    const cliente = clienteRef.current.value;
    const origen = origenRef.current.value;
    const destino = destinoRef.current.value;
    const createDate = createDateRef.current.value;

    // Hacer petición AJAX (fecth) para consumir API
    fetch("http://localhost:3031/order/edit", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({ idNumber, cliente, origen, destino, createDate }),
    })
      .then((data) => data.json()) // Obtener los datos
      .then((data) => {
        alert(data.message);
        limpiar();
      }) // Mostrar mensaje OK    :)
      .catch((error) => alert(error)); // Mostrar mensaje error :(
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
            <Topbar />

            {/* <!-- Begin Page Content --> */}

            <div className="container-fluid">
              {/* <!-- Page Heading --> */}

              <div className="d-sm-flex align-items-center justify-content-left mb-2">
                <h1 className="h3 mb-0 text-gray-800">Ingresar orden &nbsp;</h1>
              </div>
              <form>
                <div class="row">
                  <div class="col-2">
                    <div class="form-outline">
                      <label class="form-label" for="form8Example4">
                        Numero de Orden
                      </label>
                      <input type="text" ref={idNumberRef} id="form8Example4" />
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="form-outline">
                      <label class="form-label" for="form8Example3">
                        Cliente
                      </label>
                      <input type="text" ref={clienteRef} id="form8Example3" />
                    </div>
                  </div>
                </div>
                <br />

                <div class="row">
                  <div class="col-2">
                    <div class="form-outline">
                      <label class="form-label" for="form8Example3">
                        Origen
                      </label>
                      <input type="text" ref={origenRef} id="form8Example3" />
                    </div>
                  </div>
                  <div class="col-2">
                    <div class="form-outline">
                      <label class="form-label" for="form8Example3">
                        Destino
                      </label>
                      <input type="text" ref={destinoRef} id="form8Example3" />
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline">
                      <label class="form-label" for="form8Example5">
                        Fecha
                      </label>
                      <input
                        type="date"
                        ref={createDateRef}
                        id="form8Example5"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <br />
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={consultar}
                    >
                      Consultar
                    </button>{" "}
                    &nbsp;
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={editar}
                    >
                      Modificar
                    </button>
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

export default EditarOrden;
