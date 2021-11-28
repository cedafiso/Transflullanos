import { Link } from "react-router-dom";

const NavBar = () => {
	return ( 
		<div>
			{/* <!-- ======= Header ======= --> */}
  <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><Link to="/">Transflullanos</Link></h1>

      {/* <!-- Uncomment below if you prefer to use an image logo --> */}

      {/* <!-- <Link to="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></Link>--> */}

      <nav id="navbar" class="navbar">
        <ul>
          <li><Link to="/" class="active">Home</Link></li>
          <li><Link to="/products">Productos</Link></li>
          <li><Link to="/portfolio">Nosotros</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/login" class="getstarted">Iniciar Sesión</Link></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
	  {/* <!-- .navbar --> */}

    </div>
  </header>

  {/* <!-- End Header --> */}

		</div>
	 );
}
 
export default NavBar;