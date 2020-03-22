import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import LandingPage from "../user/LandingPage";
import Signin from "../auth/Signin";
import Signup from "../auth/Signup";
import Admin from "../admin/AdminLogin";
import $ from "jquery";
import materialize from "materialize-css";
export default class Header extends Component {
  render(){
  return (
    <div>
      <header>
        <nav className="nav-extended indigo darken-3">
          <div className="navbar-fixed">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">
                Meal
              </a>
              <a href="" className="sidenav-trigger" data-terget="mobile-nav">
                <i className="material-icons white-text text-darken-4">menu</i>
              </a>

              <ul id="nav-mobile" className="right hide-on-=med-and-down">
                <li>
                  <NavLink exact className="white-text text-darken-3" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    className="white-text text-darken-3"
                    to="/signin"
                  >
                    Signin
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    className="white-text text-darken-3"
                    to="/signup"
                  >
                    Signup
                  </NavLink>
                </li>

                <li>
                <a
                    className="dropdown-trigger white-text text-darken-4"
                    href="#"
                    data-target="dropdown1"
                  >
                    <i className="material-icons left white-text text-darken-2">
                      arrow_drop_down
                    </i>
                    profile
                  </a>

                  <ul id="dropdown1" className="dropdown-content">
                  <li>
                      <NavLink exact className="grey-text text-darken-3" to="/userProfile">
                       
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        exact
                        className="grey-text text-darken-3"
                        to="/myOrder"
                      >
                        
                        My Orders
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        exact
                        className="grey-text text-darken-3"
                        to="/signup"
                      >
                        Signout
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <ul className="sidenav yellow-text text-darken-3" id="mobile-nav">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="title"
              href="https://github.com/"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </li>
          <li>
            <NavLink exact to="/auth/signin">
              Signin
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/auth/signup">
              Signup
            </NavLink>
          </li>
        </ul>
      </header>

      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}
}