import React from "react";
function Pets(props) {
  return (
    <>
      <div className="pets_card">
        <img src={props.src} alt="" />
        <div style={{ display: "block" }}>
          <h1>{props.title}</h1>
          <p>{props.p}</p>
        </div>
      </div>
    </>
  );
}
export default Pets;
