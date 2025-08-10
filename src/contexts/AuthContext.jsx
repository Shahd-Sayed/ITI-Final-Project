import { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("Login");
    if (token) {
      setUser({ token });
    } else {
      setUser(null);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("Login", token);
    setUser({ token });
  };

  const logout = () => {
    Swal.fire({
      title: "Are you sure you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, log me out",
      cancelButtonText: "Cancel",
      confirmButtonColor: "var(--main-color)",
      background: "var(--main-bg-color)",
      color: "var(--main-color)",
    }).then((res) => {
      if (res.isConfirmed) {
        localStorage.removeItem("Login");
        setUser(null);
        Swal.fire({
          title: "Logged Out",
          text: "You have been logged out successfully.",
          icon: "success",
          confirmButtonColor: "var(--main-color)",
          background: "var(--main-bg-color)",
          color: "var(--main-color)",
        });
      }
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
