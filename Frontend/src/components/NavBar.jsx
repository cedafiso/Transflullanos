import { Link } from "react-router-dom";

const NavBar = () => {
	return ( 
		<div>
			{/* <!-- ======= Header ======= --> */}
    <header id="header" className="d-flex align-items-center">
    <div className="container d-flex align-items-center">

      <h1 className="logo me-auto"><Link to="/">Transflullanos</Link></h1>

      {/* <!-- Uncomment below if you prefer to use an image logo --> */}

      {/* <!-- <Link to="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></Link>--> */}

      <nav id="navbar" className="navbar">
        <ul>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/products" className="nav-link">Productos</Link></li>
          <li><Link to="/nosotros" className="nav-link">Nosotros</Link></li>
          <li><Link to="/contactos" className="nav-link">Contacto</Link></li>
          <li><Link to="/login" className="getstarted">Iniciar Sesión</Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
	  {/* <!-- .navbar --> */}

    </div>
  </header>

  {/* <!-- End Header --> */}

		</div>
	 );
}
 
export default NavBar;