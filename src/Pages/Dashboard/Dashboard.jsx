import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Hoks/Contexthooks";
import { useEffect } from "react";
import Axios from "../../Hoks/Axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Button from "../../components/Button";
import Nav from "./Nav/Nav";
import Sidebar from "./Nav/Sidebar/Sidebar";
import MSidebar from "./Nav/Sidebar/MSidebar";
import { Helmet } from "react-helmet";
import SEO from "../../Hoks/SEO";

const Dashboard = () => {
  const { token, nav, category } = useContext(AuthContext);

  return (
    <>
      <SEO
        title={"Eatery Dashboard"}
        description={"Admin Dashboard"}
        type={"Dashboard"}
        name={"EMOSENTA"}
      />
      <ToastContainer />
      <Nav />
      <div className="flex ">
        {nav ? (
          <>
            <MSidebar />{" "}
          </>
        ) : (
          <Sidebar />
        )}
        <div className="flex-1 md:ml-[15%] p-5 " style={{ zIndex: -1 }}>
          <h2 className="text-3xl text-[#423535]">DASHBOARD</h2>
          <div className="grid md:grid-cols-3 gap-2 my-5">
            <div className="card py-5 px-2 bg-blue-400 rounded-md">
              <h2>Total Categories</h2>
              <h3 className="text-4xl pt-5">{category.length}</h3>
            </div>
            <div className="card py-5 px-2 text-blue-700 bg-yellow-400 rounded-md">
              <h2>Total Orders</h2>
              <h3 className="text-4xl pt-5">5</h3>
            </div>
            <div className="card py-5 px-2 bg-blue-600 rounded-md">
              <h2>Total Products</h2>
              <h3 className="text-4xl pt-5">5</h3>
            </div>
          </div>
          <div className="my-11 md:my-20">
            <h2 className="py-5 text-2xl">ORDERS</h2>
            <div className="orders grid md:grid-cols-3 gap-2 ">
              <div className="card py-5 px-2 bg-red-400 rounded-md">
                <h2>Total Categories</h2>
                <h3 className="text-4xl pt-5">5</h3>
              </div>

              <div className="card py-5 px-2 bg-purple-400 rounded-md">
                <h2>Total Categories</h2>
                <h3 className="text-4xl pt-5">5</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
