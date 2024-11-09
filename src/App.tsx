import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  return (
    <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<SingleProduct />} />
          </Routes>
    </BrowserRouter>
  );
};

export default App;
