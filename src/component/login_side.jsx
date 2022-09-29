import React from "react";
import Logo from "./small_component/logo";
import LoginDetail from "../component/small_component/login_detail";
function loginSide() {
  return (
    <div className="login_side">
      <Logo />
      <LoginDetail />
    </div>
  );
}
export default loginSide;
