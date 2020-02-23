import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import { BtnBurger } from "./components/BtnBurger";
import { Css3 } from "./components/Css3";
import { Responsive } from "./components/Responsive";
import "./styles.scss";

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/btnburger">BtnBurger</NavLink>
            </li>
            <li>
              <NavLink to="/css3">Css3</NavLink>
            </li>
            <li>
              <NavLink to="/responsive">Responsive</NavLink>
            </li>
          </ul>
          <div className="btn-burger-warpper">
            <BtnBurger />
          </div>
        </nav>
        <Route exact path="/" component={BtnBurger} />
        <Route path="/btnburger" component={BtnBurger} />
        <Route path="/css3" component={Css3} />
        <Route path="/responsive" component={Responsive} />
      </main>
    </BrowserRouter>
  );
}
