import { React, useState } from "react";
import { AuthContext } from "../../../../Hoks/Contexthooks";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { data } from "./data.jsx";

const MSidebar = () => {
  const coreLinks = data.filter((item) => item.category === "Core");
  const interfaceLinks = data.filter(
    (item) => item.miniCategory === "category"
  );
  const manageUserLinks = data.filter(
    (item) => item.category === "Manage User"
  );
  const productsLinks = data.filter((item) => item.miniCategory === "products");
  const [categoryDDown, setCategoryDDown] = useState(false);
  const [productsDDown, setProductsDDown] = useState(false);

  const handleCDropDown = () => {
    setCategoryDDown(!categoryDDown);
  };

  const handlePDropDown = () => {
    setProductsDDown(!productsDDown);
  };
  return (
    <div className="Mobile__sidebar md:hidden bg-blue-500 text-white w-[50%] py-5 h-[100vh] fixed">
      <ul className="flex justify-evenly flex-col ml-10">
        <small>
          <p className="text-[#ffffffbe]">Core</p>
        </small>
        {coreLinks.map((item, index) => (
          <li className="py-5 flex items-center" key={index}>
            <span className="pr-3">{item.icon}</span>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
        {/* Interface */}
        <small className="pt-5">
          <p className="text-[#ffffffbe]">Interface</p>
        </small>
        {/* Category  */}
        <div
          className="flex items-center justify-between pr-5 cursor-pointer"
          onClick={handleCDropDown}
        >
          {categoryDDown ? (
            <>
              <li className="py-5 pr-4">Category</li>
              <p className=" pl-5 ">⏷</p>{" "}
            </>
          ) : (
            <>
              <li className="py-5 pr-4">Category</li>
              <p className=" pl-5 ">⏵</p>{" "}
            </>
          )}
        </div>
        {categoryDDown &&
          interfaceLinks.map((item, index) => (
            <li className="py-5 flex items-center" key={index}>
              <span className="pr-3">{item.icon}</span>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}

        {/* Products */}

        <div
          className="flex items-center justify-between pr-5 cursor-pointer"
          onClick={handlePDropDown}
        >
          {productsDDown ? (
            <>
              <li className="py-5 pr-4">Products</li>
              <p className=" pl-5 ">⏷</p>{" "}
            </>
          ) : (
            <>
              <li className="py-5 pr-4">Products</li>
              <p className=" pl-5 ">⏵</p>{" "}
            </>
          )}
        </div>

        {productsDDown && (
          <>
            {productsLinks.map((item, index) => (
              <li className="py-5 flex items-center" key={index}>
                <span className="pr-3">{item.icon}</span>
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </>
        )}

        <small className="pt-5">
          <p className="text-[#ffffffbe]">Manage User</p>
        </small>
        {manageUserLinks.map((item, index) => (
          <li className="py-5 flex items-center" key={index}>
            <span className="pr-3">{item.icon}</span>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MSidebar;
