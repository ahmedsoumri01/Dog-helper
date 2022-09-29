import React from "react";
import Logo from "../small_component/logo";
import NavBar from "../small_component/navBar";
function Header() {
  return (
    <>
      <header>
        <div style={{ display: "flex" }}>
          <Logo />
          <NavBar />
        </div>
        <div class="detial">
          <h1>We care for your furry little loved ones while you’re away</h1>
          <button className="btn1">Schedule a visit</button>
        </div>
      </header>
    </>
  );
}
export default Header;
