import { useNavigate } from "react-router-dom";
import "../layouts/SplashScreen.css";
import { useEffect } from "react";

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/login", { replace: true });
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="splash d-flex flex-column justify-content-center align-items-center min-vh-100 ">
      <h2 className="fade_in">
        {/* Welcome to our <b>Montio</b> */}
        <img src="../../icon (2).svg" alt="logo" />
      </h2>
    </div>
  );
}
export default SplashScreen;
