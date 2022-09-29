import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="list">
        <ul>
          <li>About us</li>
          <li>Reviews</li>
          <li>services</li>
          <li>
            <NavLink to="/SignUp">Sign up</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
export default NavBar;
