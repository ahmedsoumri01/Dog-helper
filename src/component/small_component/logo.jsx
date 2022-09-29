import React from "react";
import pawtastic from "../../images/PAWTASTIC.svg";
import logo from "../../images/logo.svg";
function Logo() {
  return (
    <div className="logos">
      <img src={logo} alt="logo" id="logo" />
      <img src={pawtastic} alt="logo" />
    </div>
  );
}
export default Logo;
