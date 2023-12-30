import React from "react";

const Button = (props) => {
  return (
    <button className="bg-blue-300 text-white px-6 py-3 rounded-md">
      {props.name}
    </button>
  );
};

export default Button;
