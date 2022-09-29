import React from "react";
import icon1 from "../../images/Wave.png";
import icon2 from "../../images/Home icon.png";
import icon3 from "../../images/Flower icon.png";
import Cards from "../../component/small_component/cards";

function Prat5() {
  return (
    <>
      <div className="part5">
        <h1>Affordable options, tailored to your needs</h1>
        <p>
          All services include live updates including photos and chat, as well
          as notifications of sitter arrival and departure times.
        </p>
        <div className="prise">
          <Cards
            src={icon3}
            title="Dog walk"
            p=" We’ll take your pup for a 30 minute walk and make sure he or she
        has fresh food and water."
            price=" £15"
            note="PER NIGHT"
          />

          <Cards
            src={icon1}
            title="Dog walk"
            p=" We’ll take your pup for a 30 minute walk and make sure he or she
         has fresh food and water."
            price=" £15"
            note="PER 30 MIN VISIT"
          />

          <Cards
            src={icon2}
            title="Dog walk"
            p="   We’ll take your pup for a 30 minute walk and make sure he or she
         has fresh food and water."
            price=" £15"
            note="PER 30 MIN WALK"
          />
        </div>
        <button className="btn2">Schedule a service</button>
      </div>
    </>
  );
}
export default Prat5;
