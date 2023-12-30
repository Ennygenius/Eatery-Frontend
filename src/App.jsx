import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import "./App.css";
import { AuthContextProvider } from "./Hoks/Contexthooks.jsx";
import { PrivateRoute } from "./Hoks/protected.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Signup from "./Pages/Auth/Signup.jsx";
import { HelmetProvider } from "react-helmet-async";
import CreateOrders from "./Pages/Dashboard/Orders/CreateOrders.jsx";

function App() {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <AuthContextProvider>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/create-orders" element={<CreateOrders />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </AuthContextProvider>
    </HelmetProvider>
  );
}

export default App;
