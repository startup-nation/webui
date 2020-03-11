import React from "react";
import { NavLink } from "react-router-dom";
import Header from '../common/Header';
export default function ResRegistration() {
  return (
    <div className="contents">
      <Header/>
      <form action="">
        <div className="container">
          <div className="row">
            <div className="center-align">
              <h4 className="indigo-text text-darken-4">Restaurant Registration</h4>
            </div>
            <div className="card col s12 l12 z-depth-2 card-border">
              <div className="card-content">
                <div className="col s12 l6" id="info-input-field">
                  <div className="row">
                    <div className="input-field col s12 l12">
                      <input
                        id="name"
                        type="text"
                        className="validate"
                        required
                      />
                      <label htmlFor="name">Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 l12">
                      <input
                        id="name"
                        type="text"
                        className="validate"
                        required
                      />
                      <label htmlFor="name">Phone No</label>
                    </div>
                  </div>
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
              
                </div>
                <div  className="col s12 l6" id="info-input-field" >
               
                  <div className="row">
                    <div className="input-field col s12 l12">
                      <input
                        id="name"
                        type="text"
                        className="validate"
                        required
                      />
                      <label htmlFor="name">Restaurant Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 l12">
                      <input
                        id="name"
                        type="text"
                        className="validate"
                        required
                      />
                      <label htmlFor="name">Restaurant Phone</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 l12">
                      <input
                        id="name"
                        type="text"
                        className="validate"
                        required
                      />
                      <label htmlFor="name">Restaurant Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 l12">
                      <input
                        id="name"
                        type="text"
                        className="validate"
                        required
                      />
                      <label htmlFor="name">Restaurant Address</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="center-align">
                      <NavLink
                        to="/Restaurant/RestaurantSignin"
                        className="waves-effect waves-light btn indigo"
                      >
                        Signup
                        <i class="material-icons right">send</i>
                      </NavLink>
                      <br />
                      <br />
                      <span className="clink">
                        Already have an account&nbsp;{" "}
                        <NavLink exact to="/Restaurant/RestaurantSignin">
                          Signin
                        </NavLink>
                      </span>
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