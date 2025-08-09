import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SplashScreen from "./pages/SplashScreen";
import Home from "./components/Home";
import NavbarHeader from "./components/NavbarHeader";
import Footer from "./components/Footer";
import Category from "./components/Category";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Payement from "./components/Payement";
import ContactForm from "./pages/ContactForm";

function App() {
  const location = useLocation();

  const hideNavbarOnPaths = ["/login", "/register", "/"];

  const shouldShowNavbar = !hideNavbarOnPaths.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <NavbarHeader />}

      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Category />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payement" element={<Payement />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>

      {shouldShowNavbar && <Footer />}
    </>
  );
}

export default App;
