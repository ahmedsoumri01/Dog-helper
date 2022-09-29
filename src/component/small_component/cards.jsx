import React from "react";

function Cards(props) {
  return (
    <div className="card">
      <img src={props.src} alt="" />
      <h1>{props.title}</h1>
      <p>{props.p}</p>
      <h2>{props.price}</h2>
      <h3>{props.note}</h3>
    </div>
  );
}
export default Cards;
