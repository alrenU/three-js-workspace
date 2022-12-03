import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../css/mainStyling.css";
import Home from "./Home";
import FirstExample from "./tutorial/FirstExample";
import SecondExample from "./tutorial/SecondExample";
import Torus from "./tutorial/Torus";
import Sphere from "./tutorial/Sphere";

function RouterPage() {
  return (
    <BrowserRouter>
      <div className="router-page">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/first-example">First Example</Link>
          </li>
          <li>
            <Link to="/second-example">Second Example</Link>
          </li>
          <li>
            <Link to="/torus">Torus</Link>
          </li>
          <li>
            <Link to="/sphere">Sphere</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route index exact path="/" element={<Home />}></Route>
        <Route exact path="/first-example" element={<FirstExample />}></Route>
        <Route exact path="/second-example" element={<SecondExample />}></Route>
        <Route exact path="/torus" element={<Torus />}></Route>
        <Route exact path="/sphere" element={<Sphere />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterPage;
