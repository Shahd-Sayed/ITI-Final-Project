import { useNavigate } from "react-router-dom";
import "../layouts/SplashScreen.css";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function SplashScreen() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/home", { replace: true });
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="splash d-flex flex-column justify-content-center align-items-center min-vh-100 ">
      <h2 className="fade_in">
        {theme === "light" ? (
          <img src="../../icon (2).svg" alt="logo" />
        ) : (
          <img src="../../image (1).webp" alt="logo" />
        )}
      </h2>
    </div>
  );
}
export default SplashScreen;
