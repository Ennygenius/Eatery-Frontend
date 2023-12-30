import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "./Axios";

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState({});
  const [category, setCategory] = useState({});

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await Axios.get("/auth/getUser", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const { Err } = res.data;
        if (Err) {
          toast(Err);
          console.log(Err);
        }
        setUser(res.data.user);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [token]);

  useEffect(() => {
    const getAllOrders = async () => {
      const res = await Axios.get("/category", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data.category);
      setCategory(res.data.category);
    };

    getAllOrders();
  }, []);
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    console.log("click");
  };

  const Logout = () => {
    if (confirm("do you want to logout")) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        Logout,
        nav,
        setNav,
        handleNav,
        user,
        setUser,
        category,
        setCategory,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
