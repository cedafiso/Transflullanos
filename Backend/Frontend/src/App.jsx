import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Nosotros from "./pages/nosotros/Nosotros";
import Contactos from "./pages/contactos/Contactos";
import {Login} from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Register from "./pages/auth/Register";
import UserInterno from "./pages/dashboard/UserInterno";
import UserExterno from "./pages/dashboard/UserExterno";
import Users from "./pages/users/Users";
import Createuser from "./pages/users/Createuser";
import Orderlist from "./pages/orders/Orderlist";
import Createorden from "./pages/orders/Createorden";
import Puertolist from "./pages/puertos/Puertolist";
import Createpuerto from "./pages/puertos/Createpuerto";


function App() {
  return (
    <BrowserRouter>
      <div id="content-wrapper">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/nosotros" element={<Nosotros />} />
          <Route exact path="/contactos" element={<Contactos />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/userinterno" element={<UserInterno />} />
          <Route exact path="/userexterno" element={<UserExterno />} />
          <Route exact path="/users" element={<Users/>} />
          <Route exact path="/Createuser" element={<Createuser/>} />
          <Route exact path="/Orderlist" element={<Orderlist/>} />
          <Route exact path="/Createorden" element={<Createorden/>} />
          <Route exact path="/Puertolist" element={<Puertolist/>} />
          <Route exact path="/Createpuerto" element={<Createpuerto/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
