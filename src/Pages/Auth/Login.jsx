import React from "react";
import bg from "../../assets/bg.avif";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Axios from "../../Hoks/Axios";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Hoks/Contexthooks.jsx";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SEO from "../../Hoks/SEO.jsx";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    let res = await Axios.post("/auth/login", {
      email,
      password,
    });

    const { Err, token } = res.data;
    if (Err) {
      toast(Err);
    } else {
      let setToken = localStorage.setItem("token", token);
      alert(`Logged in as ${email}`);
      navigate("/");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login();
  };
  return (
    <>
      <SEO
        title={"Eatery Dashboard"}
        description={"Admin Dashboard"}
        type={"Dashboard"}
        name={"EMOSENTA"}
      />
      <ToastContainer />
      <div className="h-[100vh] flex flex-col justify-evenly items-center">
        <div className="grid md:grid-cols-2 place-items-center py-20 shadow-xl md:w-[70%] m-auto p-10 ">
          <div>
            <img src={bg} className="hidden md:block" alt="login-bg-img" />
          </div>

          <form
            action=""
            className="md:px-3 w-full"
            autoComplete="off"
            onSubmit={handleLogin}
          >
            <fieldset className="border p-5">
              <legend className="text-xl text-blue-400">
                Please fill in the fields:
              </legend>
              <div className="pb-5">
                <label htmlFor="email" className="text-[rgba(0,0,0,0.82)] ">
                  Email:
                </label>
                <input
                  type="email"
                  autoComplete="false"
                  className="w-full outline-none !text-blue-400 pl-2 py-3 border"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className="pt-5 py-10">
                <label htmlFor="email" className="text-[rgba(0,0,0,0.82)]">
                  Password:
                </label>
                <input
                  type="password"
                  className="w-full outline-none text-[rgba(0,0,0,0.82)] pl-2  py-3 border"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <h2>Show</h2>
              </div>

              <Button name={"Login"} />
              <p className="pt-5  tracking-wider text-sm font-extralight">
                Don't have an account
                <Link to={"/signup"}>
                  <span className="text-blue-400"> Signup</span>
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
