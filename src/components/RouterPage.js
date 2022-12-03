import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Sphere from "./first_shape/Sphere";
import "../css/mainStyling.css";

function RouterPage() {
  return (
    <BrowserRouter>
      <div className="router-page">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sphere">Sphere Example</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route index exact path="/" element={<Home />}></Route>
        <Route exact path="/sphere" element={<Sphere />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterPage;
