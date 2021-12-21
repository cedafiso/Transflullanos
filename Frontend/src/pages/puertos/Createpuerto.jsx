import Sidebar from "../dashboard/components/Sidebar";
import Topbar from "../dashboard/components/Topbar";
import React, { useRef } from "react";

const UserExterno = () => {
  const puerto1Ref = useRef();
  const puerto2Ref = useRef();
  const tarifaRef = useRef();

  function guardar() {
    const puerto1 = puerto1Ref.current.value;
    const puerto2 = puerto2Ref.current.value;
    const tarifa = tarifaRef.current.value;

    fetch("http://localhost:3031/puerto/create", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({ puerto1, puerto2, tarifa }),
    })
      .then((res) => res.json())
      .then((res) => {
        alert(res.message);
        limpiar();
      });
  }

  function consultar() {
    const puerto1 = puerto1Ref.current.value;
    const puerto2 = puerto2Ref.current.value;

    fetch("http://localhost:3031/puerto/consultar", {
      method: "POST", // or 'PUT'
      body: JSON.stringify({ puerto1, puerto2 }), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        tarifaRef.current.value = res.data.tarifa;
      })
      .catch((error) => alert(error));
  }

  function borrar() {
    const puerto1 = puerto1Ref.current.value;
    const puerto2 = puerto2Ref.current.value;

    // Hacer petición AJAX (fecth) para consumir API
    fetch("http://localhost:3031/puerto/delete", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({ puerto1, puerto2 }),
    })
      .then((data) => data.json()) // Obtener los datos
      .then((data) => {
        alert(data.message);
        limpiar();
      }) // Mostrar mensaje OK    :)
      .catch((error) => alert(error)); // Mostrar mensaje error :(
  }

  function editar() {
    // Capturar los datos
    const puerto1 = puerto1Ref.current.value;
    const puerto2 = puerto2Ref.current.value;
    const tarifa = tarifaRef.current.value;

    // Hacer petición AJAX (fecth) para consumir API
    fetch("http://localhost:3031/puerto/edit", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({ puerto1, puerto2, tarifa }),
    })
      .then((data) => data.json()) // Obtener los datos
      .then((data) => {
        alert(data.message);
        limpiar();
      }) // Mostrar mensaje OK    :)
      .catch((error) => alert(error)); // Mostrar mensaje error :(
  }

  function limpiar() {
    puerto1Ref.current.value = "";
    puerto2Ref.current.value = "";
    tarifaRef.current.value = "";
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
                <h1 className="h3 mb-0 text-gray-800">Generar puerto &nbsp;</h1>
              </div>
              <form>
                <div class="row">
                  <div class="col-4">
                    <div class="form-outline">
                      <label class="form-label" for="form8Example3">
                        Puerto origen
                      </label>
                      <input type="text" ref={puerto1Ref} id="form8Example3" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div class="col-4">
                    <div class="form-outline">
                      <label class="form-label" for="form8Example3">
                        Puerto destino
                      </label>
                      <input type="text" ref={puerto2Ref} id="form8Example3" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div class="col-4">
                    <div class="form-outline">
                      <label class="form-label" for="form8Example3">
                        Tarifa
                      </label>
                      <input type="text" ref={tarifaRef} id="form8Example3" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <br />
                  <div class="col-3">
                    <br />
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={consultar}
                    >
                      Consultar
                    </button>
                    &nbsp;&nbsp;
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={editar}
                    >
                      Modificar
                    </button>
                    &nbsp;&nbsp;
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={guardar}
                    >
                      Guardar
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

export default UserExterno;
