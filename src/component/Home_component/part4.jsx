import React from "react";
import Pets from "../small_component/pets";
import cat from "../../images/floof.png";
import cat2 from "../../images/ginger.png";
import cat3 from "../../images/lindsay.png";
import cat4 from "../../images/ned.png";

function part4() {
  return (
    <div className="part4">
      <h1 style={{ textAlign: "center" }}>Pets (and their humans) love us</h1>
      <div>
        <Pets
          src={cat4}
          title="Lindsay M."
          p="Pawtastic is awesome! They are passionate about pets and employ
        trustworthy, dependable staff. We love them!”"
        />
        <Pets
          src={cat}
          title="Lindsay M."
          p="Pawtastic is awesome! They are passionate about pets and employ
        trustworthy, dependable staff. We love them!”"
        />
        <Pets
          src={cat2}
          title="Lindsay M."
          p="Pawtastic is awesome! They are passionate about pets and employ
        trustworthy, dependable staff. We love them!”"
        />
        <Pets
          src={cat3}
          title="Lindsay M."
          p="Pawtastic is awesome! They are passionate about pets and employ
        trustworthy, dependable staff. We love them!”"
        />
      </div>
      <button className="btn1">Read all reviews</button>
    </div>
  );
}
export default part4;
