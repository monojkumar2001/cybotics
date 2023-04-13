import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/Home";

const App = () => {
  AOS.init();
  return (
    <div className="body-wrapper">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>          
          </Switch>
        </Router>
    </div>
  );
};

export default App;
