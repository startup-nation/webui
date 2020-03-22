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
import RestaurantDashboard from "./components/layout/restaurant/RestaurantDashboard";
import RestaurantSignin from "./components/layout/restaurant/RestaurantSignin";
import UserProfile from "./components/layout/user/UserProfile";
import RestaurantFood from "./components/layout/restaurant/RestaurantFood";
import RestaurantList from "./components/layout/admin/RestaurantList";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Header} />
      <Route exact path="/admin" component={AdminLogin} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/userProfile" component={UserProfile} />
      <Route exact path="/restaurants/food" component={Food} />
      <Route exact path="/restaurants" component={Restaurants} />
      
      <Route exact path="/admin/dashboard" component={AdminDashboard} />
      <Route exact path="/admin/restaurantList" component={RestaurantList} />
      <Route exact path="/restaurant/RestaurantSignin" component={RestaurantSignin} />
      <Route exact path="/restaurant/registration" component={ResRegistration} />
      <Route exact path="/restaurant/RestaurantDashboard" component={RestaurantDashboard} />
      <Route exact path="/restaurant/RestaurantFood" component={RestaurantFood} />
     


    </div>
  );
}

export default App;
