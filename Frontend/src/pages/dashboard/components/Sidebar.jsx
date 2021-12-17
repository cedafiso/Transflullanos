import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {

  function logout() {
    localStorage.removeItem("token");
    // const navigate = useNavigate()
    // navigate('/');
    window.location.href = "/";
}


  return (
    <React.Fragment>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/dashboard"
        >
          <div className="sidebar-brand-icon rotate-n-0">
            <i class="fas fa-ship"></i>
          </div>
          <div className="sidebar-brand-text mx-3">TRANSFLULLANOS</div>
        </Link>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item active">
          <Link className="nav-link" to="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Gestionar Usuarios</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <NavLink
            className="nav-link collapsed"
            to="/users"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
            activeclassname="text-white"
          >
            <i className="fas fa-users-cog"></i>
            <span>Usuarios externos</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link collapsed"
            to="/userinterno"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
            activeclassname="text-white"
          >
            <i className="fas fa-users-cog"></i>
            <span>Usuarios internos</span>
          </NavLink>
          <div
            id="collapseUtilities"
            class="collapse show"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Opciones</h6>
              <Link class="collapse-item" to="/">
                Ingresar puertos
              </Link>
              <Link class="collapse-item" to="/">
                Aceptar ordenes
              </Link>
              <Link class="collapse-item" to="/">
                Cambiar estados
              </Link>
            </div>
          </div>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />
        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            aria-expanded="true"
            aria-controls="collapsePages"
            data-toggle="modal"
            data-target="#logoutModal"
          >
            <i className="fas fa-sign-out-alt"></i>
            <span type="button" onClick={logout}>Cerrar sesión</span>
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Sidebar;
