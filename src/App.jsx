import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SplashScreen from "./pages/SplashScreen";
import Home from "./components/Home";
import NavbarHeader from "./components/NavbarHeader";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Category from "./components/Category";

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
        <Route path="/product" element={<Product />} />
      </Routes>

      {/* {shouldShowNavbar && <Footer />} */}
    </>
  );
}

export default App;
