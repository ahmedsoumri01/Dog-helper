import React from "react";
import bg3 from "../../images/bg3.png";
function part3() {
  return (
    <div className="part3">
      <img src={bg3} alt="" />
      <div>
        <h1>Services tailored to your needs</h1>
        <p>
          Schedule one-off or recurring home visits. An experienced member of
          our team will spend time with your pet, feed them, change cat litter
          trays, take the dog for a walk, and anything else you need.
        </p>
        <button className="btn2">Schedule a visit</button>
      </div>
    </div>
  );
}
export default part3;
