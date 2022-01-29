import React from "react";
import "./Button.css";

function Button(props) {
  const { variant = "primary", children, ...args } = props;
  return (
    <button className={`button ${variant}`} {...args}>
      {children}
    </button>
  );
}

export default Button;
