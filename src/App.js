import React from "react";
import "./App.css";
import Header from "./components/layout/common/Header";
import AdminDashboard from "./components/layout/admin/AdminDashboard";
import { Route, Link, Switch, Router } from "react-router-dom";
import AdminLogin from "./components/layout/admin/AdminLogin";
import Signin from "./components/layout/auth/Signin";
import Signup from "./components/layout/auth/Signup";
import Restaurants from "./components/layout/common/Restaurants";
import Food from "./components/layout/common/Food";
import ResRegistration from "./components/layout/restaurant/ResRegistration";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Header} />
      <Route exact path="/admin" component={AdminLogin} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={Signup} />

      <Route exact path="/restaurants/food" component={Food} />
      <Route exact path="/restaurants" component={Restaurants} />
      
      <Route exact path="/admin/dashboard" component={AdminDashboard} />
      <Route exact path="/restaurant/registration" component={ResRegistration} />


    </div>
  );
}

export default App;
