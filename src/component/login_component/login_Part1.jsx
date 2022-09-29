import React from "react";
import "../../styles/login_style.css";
import LoginSide from "../login_side";
import Btn from "../small_component/btn";
import { NavLink } from "react-router-dom";

function Part1() {
  return (
    <div className="login_style">
      <LoginSide />
      <div className="detaill_right">
        <div className="right">
          <h1>First, let’s make sure we serve your area.</h1>
          <input type="text" placeholder="zip code" />
        </div>
        <div className="navig_footer">
          <Btn name="back" link={<NavLink to="/">Back</NavLink>} />
          <Btn name="suive" link={<NavLink to="/SignUp_Part2">suiv</NavLink>} />
        </div>
      </div>
    </div>
  );
}
export default Part1;
