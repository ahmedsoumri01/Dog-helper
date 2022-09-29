import React from "react";

function Btn(props) {
  return (
    <div className="footer">
      <button className="footer_btn">{props.link}</button>
    </div>
  );
}
export default Btn;
