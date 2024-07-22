import React, { useState, useContext, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("auth") || "");
  const navigate = useNavigate();

  const fetchLogin = async (data) => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      const res = await response.json();
      if (response.ok) {
        setUser(res.username);
        setToken(res.token);
        localStorage.setItem("auth", res.token);
        navigate("/");
        return;
      } else {
        toast.error(res.message, {
          position: "top-center"
        });
      }
    } catch (err) {
      console.log(err)
    }
  }
  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    <AuthContext.Provider value={{ token, user, fetchLogin, logOut }}>
      {children}
      <ToastContainer/>
    </AuthContext.Provider>
  )
};
export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};