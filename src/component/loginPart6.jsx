import React from "react";
import Logo from "./small_component/logo";
import Steps from "./small_component/Steps";
import Btn from "./small_component/btn";
import { NavLink } from "react-router-dom";
function Part6() {
  return (
    <div className="login_style">
      <div className="login_side">
        <Logo />
        <Steps />
      </div>
      <div className="right_part2">
        <div className="detaill_right_part2">
          <div className="part6">
            <h1>Yay, we love dogs! Give us the basics about your pup.</h1>
            <div>
              <span>Favorite things</span>
              <div className="part6_fav">
                <div>
                  <span>
                    <input type="checkbox" name="" id="" />
                    select all
                  </span>
                  <span>
                    <input type="checkbox" name="" id="" />
                    barking
                  </span>
                  <span>
                    <input type="checkbox" name="" id="" />
                    playing fetch
                  </span>
                </div>
                <div>
                  <span>
                    <input type="checkbox" name="" id="" />
                    select all
                  </span>
                  <span>
                    <input type="checkbox" name="" id="" />
                    barking
                  </span>
                  <span>
                    <input type="checkbox" name="" id="" />
                    playing fetch
                  </span>
                </div>
                <div>
                  <span>
                    <input type="checkbox" name="" id="" />
                    select all
                  </span>
                  <span>
                    <input type="checkbox" name="" id="" />
                    barking
                  </span>
                  <span>
                    <input type="checkbox" name="" id="" />
                    playing fetch
                  </span>
                </div>
              </div>

              <div>
                <span>label</span>
                <input type="text" />
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
export default Part6;
