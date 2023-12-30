import { useContext } from "react";
import { AuthContext } from "./Contexthooks";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const useProtect = () => {
  const { token } = useContext(AuthContext);

  if (token) {
    return true;
  } else {
    null;
  }
};

export const PrivateRoute = () => {
  const protect = useProtect();

  return protect ? <Outlet /> : <Navigate to="/login" />;
};
