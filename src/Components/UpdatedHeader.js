import React from "react";
import { NavLink } from "react-router-dom";

const NavlinkStyle = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "none" : false,
    color: isActive ? "green" : null,
    textTransform: isActive? 'lowercase':null
  };
};
const style = {
  color: "white",
  padding: "10px",
  fontFamily: "Arial",
  display: "inline",
  fontSize: "20px",
  textDecoration: "none",
  textTransform: "uppercase",
};
const spanStyle = {
  margin: "0px 5% 0px 40px",
};

const UpdatedHeader = () => {
  return (
    <div>
      <ul style={{ display: "flexInline" }}>
        <span className='Home' style={spanStyle}>
          <li style={style} className='navlinks'>
            <NavLink style={NavlinkStyle} to={"/"}>
              home{" "}
            </NavLink>
          </li>
        </span>
        <span>
          <li style={style} className='navlinks'>
            <NavLink style={NavlinkStyle} to={"contactMe"}>
              contact me
            </NavLink>
          </li>
          <li style={style} className='navlinks'>
            <NavLink style={NavlinkStyle} to={"About"}>
              About Me
            </NavLink>
          </li>
          <li style={style} className='navlinks'>
            <NavLink style={NavlinkStyle} to={"projects"}>
              projects
            </NavLink>
          </li>
          <li style={style} className='navlinks'>
            <NavLink style={NavlinkStyle} to={"services"}>
              my services
            </NavLink>
          </li>
          {/* <li style={style} className='navlinks'>
            <NavLink style={NavlinkStyle} to={"workers"}>
              Employees
            </NavLink>
          </li> */}
        </span>
      </ul>
    </div>
  );
};

export default UpdatedHeader;
