import "../layouts/Error.css";
import error from "../assets/Frame (2)-edit.svg";
import errorDark from "../assets/Group.svg";
import { useContext } from "react";
import { ThemeContext } from "./../contexts/ThemeContext";
import { Link } from "react-router-dom";
function Error() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="error">
        <div className="error-heading">
          <h1>Oops !</h1>
          <p>The page you are looking for cannot be found</p>
        </div>
        {theme === "light" ? (
          <div className="img">
            <img src={error} alt="error" />
          </div>
        ) : (
          <div className="img">
            <img src={errorDark} alt="error" />
          </div>
        )}
        <Link to={"/home"}>
          <span>return to home</span>
        </Link>
      </div>
    </>
  );
}

export default Error;
