import React from "react-router-dom";
import "../styles/login_style.css";
import Logo from "./small_component/logo";
import Steps from "./small_component/Steps";
import Btn from "./small_component/btn";
import { NavLink } from "react-router-dom";

function Part3() {
  return (
    <div className="login_style">
      <div className="login_side">
        <Logo />
        <Steps />
      </div>

      <div className="right_part2">
        <div className="detaill_right_part2">
          <h1>Hello! Please tell us a little bit about yourself.</h1>
          <div className="inptPassword">
            <div>
              <span>First name</span>
              <input type="text" placeholder="placeholder" />
            </div>
            <div>
              <span>Last name</span>
              <input type="text" placeholder="confirm Password" />
            </div>
          </div>
          <div className="inptPassword">
            <div>
              <span>Phone</span>
              <input type="text" placeholder="placeholder" />
            </div>
            <div>
              <span>Phone alt</span>
              <input type="text" placeholder="confirm Password" />
            </div>
          </div>
          <div>
            <span>label</span>
            <input
              style={{ height: "50px", width: "90%" }}
              type="text"
              placeholder="place holder text"
            />
          </div>
          <div className="buttom_part3">
            <div>
              <span>city</span>
              <input type="text" />
            </div>
            <div>
              <span>state</span>
              <input type="number" />
            </div>
            <div>
              <span>zip</span>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="navig_footer">
          <Btn name="back" link={<NavLink to="/SignUp_Part2">back</NavLink>} />
          <Btn name="suive" link={<NavLink to="/SignUp_Part4">suiv</NavLink>} />
        </div>
      </div>
    </div>
  );
}

export default Part3;
