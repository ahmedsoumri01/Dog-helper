import Home from "./component/Home_page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./component/login";
import Part2 from "./component/loginPart2";
import Part3 from "./component/loginPart3";
import Part4 from "./component/loginPart4";
import Part5 from "./component/loginPart5";
import Part6 from "./component/loginPart6";

import Part1 from "./component/login_component/login_Part1";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* - - - -   signup pages   - - - - - */}
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignUp_Part1" element={<Part1 />} />
            <Route path="/SignUp_Part2" element={<Part2 />} />
            <Route path="/SignUp_Part3" element={<Part3 />} />
            <Route path="/SignUp_Part4" element={<Part4 />} />
            <Route path="/SignUp_Part5" element={<Part5 />} />
            <Route path="/SignUp_Part6" element={<Part6 />} />
            {/*  - - - -   end of singUp page   - - - - -        */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
