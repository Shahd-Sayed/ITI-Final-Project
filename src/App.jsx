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
import ProtectedRoute from "./components/ProtectedRoute";
import Error from "./pages/Error";
import TermsPage from "./pages/TermsPage";
import Privacy from './pages/Privacy';

function App() {
  const location = useLocation();

  const showNavbarFooterPaths = [
    "/home",
    "/product",
    "/cart",
    "/payement",
    "/contact",
    "/terms",
    "/privacy",
  ];

  const isProductDetail =
    location.pathname.startsWith("/product/") &&
    location.pathname !== "/product";

  const shouldShowNavbarFooter =
    showNavbarFooterPaths.includes(location.pathname) || isProductDetail;

  return (
    <>
      <div className="app-wrapper">
        {shouldShowNavbarFooter && <NavbarHeader />}
        <main className="app-content">
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product" element={<Category />} />
            <Route path="/product/:slug" element={<ProductDetails />} />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route path="/payement" element={<Payement />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        {shouldShowNavbarFooter && <Footer />}
      </div>
    </>
  );
}

export default App;
