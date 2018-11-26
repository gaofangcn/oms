import React from "react";
// import "./loginBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const GuestBtn = props => (
  <button className="login-btn btn" {...props}>
    Guest
  </button>
);

export default GuestBtn;
