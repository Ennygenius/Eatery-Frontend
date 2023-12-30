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

const Signup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRPassword] = useState("");

  const signup = async () => {
    let res = await Axios.post("/auth/signup", {
      firstName,
      lastName,
      email,
      gender,
      password,
      repeatPassword,
    });

    const { Err } = res.data;
    if (Err) {
      toast(Err);
    } else {
      alert(`Auth Successfull`);
      navigate("/");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signup();
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
      <div className="flex flex-col justify-evenly items-center">
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
                  First Name:
                </label>
                <input
                  type="text"
                  autoComplete="false"
                  className="w-full outline-none text-[rgba(0,0,0,0.67)] pl-2 py-3 border"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>

              <div className="pb-5">
                <label htmlFor="email" className="text-[rgba(0,0,0,0.82)] ">
                  Last Name:
                </label>
                <input
                  type="text"
                  autoComplete="false"
                  className="w-full outline-none text-[rgba(0,0,0,0.67)] pl-2 py-3 border"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
              <div className="pb-5">
                <label htmlFor="email" className="text-[rgba(0,0,0,0.82)] ">
                  Email:
                </label>
                <input
                  type="email"
                  autoComplete="false"
                  className="w-full outline-none text-[rgba(0,0,0,0.67)] pl-2 py-3 border"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="pb-5">
                <label htmlFor="email" className="text-[rgba(0,0,0,0.82)] ">
                  Gender:
                </label>
                <select
                  name="gender"
                  id=""
                  className="w-full outline-none text-[rgba(0,0,0,0.67)] pl-2 py-3 border"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                >
                  <option value="">SELECT</option>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                </select>
              </div>

              <div className="pt-5 py-8">
                <label htmlFor="email" className="text-[rgba(0,0,0,0.82)]">
                  Password:
                </label>
                <input
                  type="password"
                  className="w-full outline-none text-[rgba(0,0,0,0.67)] pl-2  py-3 border"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <div className="pt-3 py-8">
                <label htmlFor="email" className="text-[rgba(0,0,0,0.67)]">
                  Repeat Password:
                </label>
                <input
                  type="password"
                  className="w-full outline-none text-[rgba(0,0,0,0.82)] pl-2  py-3 border"
                  onChange={(e) => {
                    setRPassword(e.target.value);
                  }}
                />
              </div>

              <Button name={"Login"} />
              <p className="pt-5  tracking-wider text-sm font-extralight">
                Already having an account
                <Link to={"/login"}>
                  <span className="text-blue-400"> Login</span>
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
