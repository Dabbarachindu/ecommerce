import React from "react";
import { NavLink,Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Nav=()=>{
        return(
            <> 
            <header className="header">
            <nav className="bd-highlight">
              <div className="nav-menu d-flex justify-content-end">
                <h3 className="flex-grow-1 p-4 pt-4 pb-2 text-white "> decor homes</h3>
                <NavLink to="/home" className="nav-link m-3 p-2 text-white">Home</NavLink>
                <NavLink to="/" className="nav-link m-3 p-2  text-white">Login</NavLink>
                <NavLink to="/products" className="nav-link m-3 p-2 text-white">products</NavLink>
                <NavLink to="/contactus" className="nav-link m-3 p-2 text-white">contactus</NavLink>
              </div>
            </nav>
            </header>
            <Outlet/>
            </>
        );
};
export default Nav;
