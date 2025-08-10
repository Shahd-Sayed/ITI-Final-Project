import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import "../layouts/SplashScreen.css";

function SplashScreen() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timeout = setTimeout(() => {
      navigate("/home", { replace: true });
    }, 3000);

    return () => {
      document.body.style.overflow = "auto";
      clearTimeout(timeout);
    };
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
