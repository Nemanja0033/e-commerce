import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route,  Routes } from "react-router-dom"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import { AuthProvider } from "./context/auth/AuthContext "
import Register from "./pages/Register"


const App = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  );
};

export default App