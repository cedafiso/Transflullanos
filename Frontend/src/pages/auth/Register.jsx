import { Link } from "react-router-dom";
import image from "./img/login.png"

const Register = () => {
	return ( 
		<div className="content-all-registrer">
		<div className="ctn-form">
          <h1 id="titulo_register">REGISTRARTE</h1>
          <p>Es rápido y fácil.</p>
          <form>
            <label htmlFor="">Número de Identificación</label>
            <input
              type="number"
              required
            />
            <label htmlFor="">Nombres</label>
            <input
              type="text"
              required
              id="name-text"
            />
            <label htmlFor="">Apellidos</label>
            <input
              type="text"
              required
            />
            <label htmlFor="">Teléfono</label>
            <input
              type="number"
            />
            <label htmlFor="">Correo electrónico</label>
            <input
              type="email"
              required
            />
            <label htmlFor="rol-select" className="col-form-label">
              Rol
            </label>
            <select
              defaultValue={"DEFAULT"}
              name="rol"
              required
            >
              <option value="DEFAULT" disabled selected={false}>
                Elija una opción
              </option>
              <option value="Administrador">Administrador</option>
              <option value="Moderador">Vendedor</option>
              <option value="Moderador">Operario</option>
            </select>
            <label htmlFor="">Contraseña</label>
            <input
              type="password"
              required
            />
  
            <input type="submit" value="Registrarte" />
          </form>
  
          <span className="text-footer">
            ¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link>
          </span>
        </div>
		<div className="ctn-image">
        <img className="image" src={image} alt="" />
      	</div>
	</div>
	 );
}
 
export default Register;