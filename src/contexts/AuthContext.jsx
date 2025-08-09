import { createContext, useState, useEffect } from "react";

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
    localStorage.removeItem("Login");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
