import React from "react";
import { NavLink } from "react-router-dom";

const HeaderPage = () => {
  const activeStyle = { color: "Orange" };
  return (
    <nav> 
      <NavLink to="/" activeStyle={activeStyle} exact><b>Home</b></NavLink>{" | "}
      <NavLink to="/courses" activeStyle={activeStyle}><b>Employee Data </b></NavLink>{ " | "}
      <NavLink to="/about" activeStyle={activeStyle}><b>About</b></NavLink>{ " | "}
      <NavLink to="/ContactUs" activeStyle={activeStyle}><b>ContactUs</b></NavLink>
      <marquee behavior="scroll" direction="left">Please check your mail to get latest updates..!</marquee>
    </nav>
  );
};
export default HeaderPage;
