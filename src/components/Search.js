// import React, { useState } from "react";

const InputWithLabel = ({ id, label, value, type = "text", onInputChange }) => {
  return (
    <div>
      <label htmlFor={id}>{label}:</label> &nbsp;
      <input id={id} type={type} onChange={onInputChange} value={value} />
    </div>
  );
};

export default InputWithLabel;
