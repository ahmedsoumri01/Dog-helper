import React from "react";
import "../styles/login_style.css";
import LoginSide from "./login_side";
import Btn from "../component/small_component/btn";
import { NavLink } from "react-router-dom";

function Part2() {
  return (
    <div className="login_style">
      <LoginSide />
      <div className="right_part2">
        <div className="detaill_right_part2">
          <h1>
            Good news! We care for pets in Winter Park. Let’s create your
            account..
          </h1>
          <span>label</span>
          <input type="text" placeholder="place holder text" />
          <div className="inptPassword">
            <div>
              <span>label</span>
              <input type="text" placeholder="placeholder" />
            </div>
            <div>
              <span>label</span>
              <input type="text" placeholder="confirm Password" />
            </div>
          </div>
          <div className="rules">
            <input type="checkbox" />
            <p>
              I have read the Privacy Policy and agree to the Terms of Service.
            </p>
          </div>
          <div className="footer">
            <p>Already a member? Log in</p>
          </div>
        </div>

        <div className="navig_footer">
          <Btn name="back" link={<NavLink to="/SignUp_Part1">back</NavLink>} />
          <Btn name="suive" link={<NavLink to="/SignUp_Part3">suiv</NavLink>} />
        </div>
      </div>
    </div>
  );
}
export default Part2;
