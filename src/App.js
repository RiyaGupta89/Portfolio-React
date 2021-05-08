import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    <div className="wrapper">
      <Navbar />
      <Switch>
        <Route 
        exact 
        path="/" 
        activeClassName="active_class" 
        component={Home}
        ></Route>
        <Route
          exact
          path="/about"
          activeClassName="active_class"
          component={About}
        ></Route>
        <Route
          exact
          path="/contact"
          activeClassName="active_class"
          component={Contact}
        ></Route>
        <Route
          exact
          path="/services"
          activeClassName="active_class"
          component={Services}
        ></Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
      </div>
    </>
  );
};

export default App;
