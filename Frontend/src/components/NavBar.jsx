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
<<<<<<< HEAD
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/products" className="nav-link">Productos</Link></li>
          <li><Link to="/nosotros" className="nav-link">Nosotros</Link></li>
          <li><Link to="/contactos" className="nav-link">Contacto</Link></li>
          <li><Link to="/login" className="getstarted">Iniciar Sesión</Link></li>
=======
          <li><Link to="/" class="active">Home</Link></li>
          <li><Link to="/products">Productos</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/contactos">Contacto</Link></li>
          <li><Link to="/register" class="getstarted">Iniciar Sesión</Link></li>
>>>>>>> 5bf3b085f043d8263d98b71ee74a413f30184a2d
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