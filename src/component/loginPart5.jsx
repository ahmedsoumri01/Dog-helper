import React from "react";
import Logo from "./small_component/logo";
import Steps from "./small_component/Steps";
import Btn from "./small_component/btn";
import { NavLink } from "react-router-dom";
function Part5() {
  return (
    <div className="login_style">
      <div className="login_side">
        <Logo />
        <Steps />
      </div>
      <div className="right_part2">
        <div className="detaill_right_part2">
          <h1>Yay, we love dogs! Give us the basics about your pup.</h1>
          <div className="part5">
            <div className="inptPassword">
              <div>
                <span>Name</span>
                <input type="text" placeholder="placeholder" />
              </div>
            </div>
            <div className="inptPassword">
              <div style={{ marginRight: "35px" }}>
                <span>Breed</span>
                <input type="text" placeholder="placeholder" />
              </div>
              <div>
                <span>Birthday</span>
                <input type="text" placeholder="confirm Password" />
              </div>
            </div>
            <div className="inptPassword">
              <div>
                <span>Gender</span>
                <div className="part5_select">
                  <p>female</p> <p>male</p>
                </div>
              </div>
              <div>
                <span>Spayed or Neutered</span>
                <div className="part5_select">
                  <p>Yes</p> <p> No </p>
                </div>
              </div>
            </div>

            <div>
              <span>label</span>
              <div className="part5_select">
                <p>Option 1</p>
                <p>Option 2</p>
                <p>Option 3</p>
                <p>Option 4</p>
                <p>Option 5</p>
              </div>
            </div>
          </div>
        </div>
        <div className="navig_footer">
          <Btn name="back" link={<NavLink to="/SignUp_Part4">back</NavLink>} />
          <Btn name="suive" link={<NavLink to="/SignUp_Part6">suiv</NavLink>} />
        </div>
      </div>
    </div>
  );
}
export default Part5;
