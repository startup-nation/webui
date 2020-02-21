import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import AdminDashboard from "../admin/AdminDashboard";
import Header from "../common/Header";
export default function AdminLogin() {
  return (
    <div className="contents">
      <Header />
      <form action="">
        <div className="container">
          <div className="row">
            <div className="center-align">
              <h4 className="indigo-text text-darken-3">Admin Panel</h4>
            </div>
            <div className="card col s12 l12 z-depth-2 card-border">
              <div className="card-content">
                <div className="col s12 l12" id="info-input-field">
                  <div className="row">
                    <div className="input-field col s12 l12">
                      <input
                        id="email"
                        type="email"
                        className="validate"
                        required
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 l12">
                      <input
                        id="password"
                        type="password"
                        className="validate"
                        required
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="center-align">
                      <NavLink
                        exact
                        to="/admin/dashboard"
                        className="waves-effect btn waves-light indigo"
                      >
                        Login
                        <i class="material-icons right">send</i>
                      </NavLink>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
