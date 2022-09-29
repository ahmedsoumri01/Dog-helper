import React from "react";
import Logo from "./small_component/logo";
import Steps from "./small_component/Steps";
import Btn from "./small_component/btn";
import Cat1 from "../images/cat1.png";
import Cat2 from "../images/cat2.png";
import Cat3 from "../images/cat3.png";
import Cat4 from "../images/cat4.jpg";

import { NavLink } from "react-router-dom";
function Part4() {
  return (
    <div className="login_style">
      <div className="login_side">
        <Logo />
        <Steps />
      </div>

      <div className="right_part2">
        <div className="detaill_right_part2">
          <h1>
            Nice to meet you, Meagan. Tell us all about your furry, feathery, or
            scaley friend.
          </h1>
          <div>
            <span>label</span>
            <div style={{ display: "flex", background: "white" }}>
              <div className="options">
                <img src={Cat1} alt="" />
                <span>option 1</span>
              </div>
              <div className="options">
                <img src={Cat2} alt="" />
                <span>option 2</span>
              </div>
              <div className="options">
                <img src={Cat3} alt="" />
                <span>option 3</span>
              </div>
              <div className="options">
                <img src={Cat4} alt="" />
                <span>option 4</span>
              </div>
            </div>
          </div>
          <p>
            Have multiple pets? That’s awesome. You can create additional pet
            profiles for the whole family later.
          </p>
        </div>
        <div className="navig_footer">
          <Btn name="back" link={<NavLink to="/SignUp_Part3">back</NavLink>} />
          <Btn name="suive" link={<NavLink to="/SignUp_Part5">suiv</NavLink>} />
        </div>
      </div>
    </div>
  );
}
export default Part4;
