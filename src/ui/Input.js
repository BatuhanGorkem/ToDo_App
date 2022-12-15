import React from "react";

const Input = ({ addClass, type, onChange, placeholder, ...InputProps }) => {
  return (
    <div>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className={addClass}
        {...InputProps}
      />
    </div>
  );
};

export default Input;
