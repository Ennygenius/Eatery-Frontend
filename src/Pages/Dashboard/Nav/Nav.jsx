import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Hoks/Contexthooks";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { FaUser } from "react-icons/fa6";

const Nav = () => {
  const { handleNav, nav, Logout, user } = useContext(AuthContext);
  // let user = JSON.parse(localStorage.getItem("details"));
  const [dDown, setDDown] = useState(false);

  const handleDropDown = () => {
    setDDown(!dDown);
  };
  const handleMouseLeave = () => {
    setDDown(false); // Close the dropdown when the mouse leaves
  };
  return (
    <div className="bg-blue-500 py-5 w-full sticky top-0 text-white">
      <div className="flex justify-between items-center px-4 md:px-12">
        <h3 className="text-3xl"> Eatery-POS</h3>
        <div className="md:flex hidden items-center">
          <span className=" p-2 mr-3 bg-white rounded-[100vw] text-blue-300 text-center">
            <FaUser />
          </span>

          <p className="hidden md:block">Welcome Back {user.firstName}</p>
          <p className="pl-3 cursor-pointer" onMouseOver={handleDropDown}>
            ⏷
          </p>
          {dDown && (
            <div
              className="bg-blue-500 px-14 py-5 absolute top-[90%] right-5 "
              onMouseLeave={handleMouseLeave}
            >
              <ul className="">
                <li className="py-5 cursor-pointer" onClick={Logout}>
                  Logout
                </li>
                <li className="py-5">Profile</li>
              </ul>
            </div>
          )}
        </div>
        <div className="md:hidden cursor-pointer" onClick={handleNav}>
          {nav ? (
            <div className="">
              <AiOutlineClose fontSize={20} color="#fff" />
            </div>
          ) : (
            <div className="">
              <AiOutlineAlignRight fontSize={20} color="#fff" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
