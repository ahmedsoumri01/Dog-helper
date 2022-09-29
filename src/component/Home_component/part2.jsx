import React from "react";
import anim1 from "../../images/cat1.png";
import anim2 from "../../images/cat2.png";
import anim3 from "../../images/cat3.png";
import anim4 from "../../images/cat4.jpg";

function Part2() {
  return (
    <>
      <div className="part2">
        <div>
          <h1>Expert care for your furry, feathery, or scaley friend</h1>
          <h3>
            We know how stressful it is to leave your pets at home alone. We’re
            a team of experienced animal caregivers, well connected to local
            veterinarians. Trust to us to love them like our own, and to keep
            them safe and happy till you’re home.
          </h3>
          <button className="btn2">Schedule a visit</button>
        </div>
        <div className="collection">
          <img src={anim1} alt="hawjeek" />
          <img src={anim2} alt="hawjeek" />
          <img src={anim3} alt="hawjeek" />
          <img src={anim4} alt="hawjeek" />
        </div>
      </div>
    </>
  );
}
export default Part2;
