import React,{useState} from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [isActive, setIsActive] = useState(false);

    const onclick = () => {
        setIsActive(!isActive);
    }

  return (
    <>
      <div className="navbar-container">
        <div className="logo">
          <NavLink to="/" className="logo-brand">
            RIYA.
          </NavLink>
        </div>
        <div className="navbar-links" >
          <NavLink exact activeClassName="menu-active" to="/" className={`link ${isActive ? "show" : "none"}`}>
            Home
          </NavLink>
          <NavLink
            to="/services"
            activeClassName="menu-active"
            className={`link ${isActive ? "show" : "none"}`}
          >
            Services
          </NavLink>
          <NavLink to="/about" activeClassName="menu-active"
          className={`link ${isActive ? "show" : "none"}`}>
            About
          </NavLink>
          <NavLink to="/contact" activeClassName="menu-active"
          className={`link ${isActive ? "show" : "none"}`}>
            Contact
          </NavLink>
        </div>
        <label id="icon" onClick={onclick}>
          <i className="fas fa-bars"></i>
        </label>
      </div>
    </>
  );
};

export default Navbar;


