import React from "react";
import { NavLink } from "react-router-dom";
import Header from '../common/Header';
export default function UserProfile() {
  return (
    <div className="contents">
      <Header/>
      <form action="">
        <div className="container">
          <div className="row">
            <div className="center-align">
              <h4 className="indigo-text text-darken-4">your profile</h4>
            </div>
            <div className="card col s12 l12 z-depth-2 card-border">
              <div className="card-content">
                <div className="col s12 l12" id="info-input-field">
                  <div className="row">
                    <div className="input-field col s12 l6">
                      <input
                        id="fname"
                        type="text"
                        className="validate"
                        required
                      />
                      <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field col s12 l6">
                      <input
                        id="lname"
                        type="text"
                        className="validate"
                        required
                      />
                      <label htmlFor="last_name">Last Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 l6">
                      <input
                        id="email"
                        type="email"
                        className="validate"
                        required
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12 l6">
                      <input
                        id="phone"
                        type="number"
                        className="validate"
                        required
                      />
                      <label htmlFor="phone">Phone Number</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="center-align">
                      <NavLink
                        to="/"
                        className="waves-effect waves-light btn indigo"
                      >
                        Update
                        <i class="material-icons right">send</i>
                      </NavLink>
                      
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