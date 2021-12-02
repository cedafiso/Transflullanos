import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home"
import Products from "./pages/products/Products"
import Nosotros from "./pages/nosotros/Nosotros"
import Contactos from "./pages/contactos/Contactos"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"

function App() {
  return (
   <BrowserRouter>
     <Routes>
     <Route exact path="/"element={<Home/>}/>
     <Route exact path="/products"element={<Products/>}/>
     <Route exact path="/nosotros"element={<Nosotros/>}/>
     <Route exact path="/contactos"element={<Contactos/>}/>
     <Route exact path="/login"element={<Login/>}/>
     <Route exact path="/register"element={<Register/>}/>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
