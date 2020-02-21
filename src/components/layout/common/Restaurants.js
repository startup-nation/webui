import React from "react";
import { NavLink } from "react-router-dom";
import image1 from "../../img/5.jpg";
import hangout from '../../img/hangout.jpg';
import dark from '../../img/dark.jpg';
import handi from '../../img/handi.jpg';
import takeout from '../../img/takeout.jpg';
import pizzahut from '../../img/pizzahut.jpg';
import burgerking from '../../img/burgerking.jpg';
import starkabab from '../../img/starkabab.jpg';
import chilis from '../../img/chilis.jpg';
import Header from "../common/Header";
export default function Restaurants() {
  return (
    <div className="">
      <Header />
      <h2 style={{color: "grey"}}>Dhaka Restaurants</h2>
      <h4>Dine out in your city… explore Dhaka restaurants</h4>
      <div className="container">
        <div className="row">
          <div className="col s12 l3">
            <NavLink exact to="/restaurants/food">
              <div className="card hoverable ">
                <div className="card-image waves-effect waves-block waves-light">
                  <img
                    width="50"
                    height="150"
                    className="activator"
                    src={hangout}
                  />
                </div>
                <div className="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    Hangout
                    <i class="material-icons right" style={{ color: "pink" }}>
                      send
                    </i>
                  </span>
                  <span class="grey-text text-darken-4">
                    the best restaurants in dhaka city
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col s12 l3">
            <NavLink exact to="/restaurants/food">
              <div className="card hoverable ">
                <div className="card-image waves-effect waves-block waves-light">
                  <img
                    width="50"
                    height="150"
                    className="activator"
                    src={dark}
                  />
                </div>
                <div className="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    Dark
                    <i class="material-icons right" style={{ color: "pink" }}>
                      send
                    </i>
                  </span>
                  <span class="grey-text text-darken-4">
                    the best restaurants in dhaka city
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col s12 l3">
            <NavLink exact to="/restaurants/food">
              <div className="card hoverable ">
                <div className="card-image waves-effect waves-block waves-light">
                  <img
                    width="50"
                    height="150"
                    className="activator"
                    src={handi}
                  />
                </div>
                <div className="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    Handi
                    <i class="material-icons right" style={{ color: "pink" }}>
                      send
                    </i>
                  </span>
                  <span class="grey-text text-darken-4">
                    the best restaurants in dhaka city
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col s12 l3">
            <NavLink exact to="/restaurants/food">
              <div className="card hoverable ">
                <div className="card-image waves-effect waves-block waves-light">
                  <img
                    width="50"
                    height="150"
                    className="activator"
                    src={takeout}
                  />
                </div>
                <div className="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    Takeout
                    <i class="material-icons right" style={{ color: "pink" }}>
                      send
                    </i>
                  </span>
                  <span class="grey-text text-darken-4">
                    the best restaurants in dhaka city
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col s12 l3">
            <NavLink exact to="/restaurants/food">
              <div className="card hoverable ">
                <div className="card-image waves-effect waves-block waves-light">
                  <img
                    width="50"
                    height="150"
                    className="activator"
                    src={pizzahut}
                  />
                </div>
                <div className="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    Pizza hut
                    <i class="material-icons right" style={{ color: "pink" }}>
                      send
                    </i>
                  </span>
                  <span class="grey-text text-darken-4">
                    the best restaurants in dhaka city
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col s12 l3">
            <NavLink exact to="/restaurants/food">
              <div className="card hoverable ">
                <div className="card-image waves-effect waves-block waves-light">
                  <img
                    width="50"
                    height="150"
                    className="activator"
                    src={burgerking}
                  />
                </div>
                <div className="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    Burger king
                    <i class="material-icons right" style={{ color: "pink" }}>
                      send
                    </i>
                  </span>
                  <span class="grey-text text-darken-4">
                    the best restaurants in dhaka city
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col s12 l3">
            <NavLink exact to="/restaurants/food">
              <div className="card hoverable ">
                <div className="card-image waves-effect waves-block waves-light">
                  <img
                    width="50"
                    height="150"
                    className="activator"
                    src={starkabab}
                  />
                </div>
                <div className="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    Star Kabab
                    <i class="material-icons right" style={{ color: "pink" }}>
                      send
                    </i>
                  </span>
                  <span class="grey-text text-darken-4">
                    the best restaurants in dhaka city
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col s12 l3">
            <NavLink exact to="/restaurants/food">
              <div className="card hoverable ">
                <div className="card-image waves-effect waves-block waves-light">
                  <img
                    width="50"
                    height="150"
                    className="activator"
                    src={chilis}
                  />
                </div>
                <div className="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    Chilis
                    <i class="material-icons right" style={{ color: "pink" }}>
                      send
                    </i>
                  </span>
                  <span class="grey-text text-darken-4">
                    the best restaurants in dhaka city
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
