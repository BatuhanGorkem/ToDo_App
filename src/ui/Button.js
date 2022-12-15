import React from "react";

const Button = ({ addClass, type, text, ...ButtonProps }) => {
  return (
    <button type={type} className={addClass} {...ButtonProps}>
      {text}
    </button>
  );
};

export default Button;
