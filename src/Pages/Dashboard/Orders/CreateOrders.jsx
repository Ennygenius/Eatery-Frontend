import React from "react";
import SEO from "../../../Hoks/SEO";
import { ToastContainer } from "react-toastify";
import Nav from "../Nav/Nav";
import MSidebar from "../Nav/Sidebar/MSidebar";
import Sidebar from "../Nav/Sidebar/Sidebar";
import { useContext } from "react";
import { AuthContext } from "../../../Hoks/Contexthooks";

const CreateOrders = () => {
  const { token, Logout, nav } = useContext(AuthContext);

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
        <div className="flex-1 md:ml-[15%] p-2 " style={{ zIndex: -1 }}>
          <h2>Create Order</h2>

          <h2>Hello</h2>
        </div>
      </div>
    </>
  );
};

export default CreateOrders;
