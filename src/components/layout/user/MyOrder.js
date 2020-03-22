import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import image1 from "../../img/5.jpg";
import burger from "../../img/burger.jpg";
import pizza from "../../img/pizza.jpg";
import barbeque from "../../img/barbeque.jpg";
import biryani from "../../img/biryani.jpg";
import pureveg from "../../img/pure-veg.jpg";
import regularfood from "../../img/regular-food.jpg";
import chinese from "../../img/chinese.jpg";
import buffet from "../../img/buffet.jpg";
import Header from "../common/Header";
import M from "materialize-css";
export default class MyOrder extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".modal");
      var instances = M.Modal.init(elems, {});
    });
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".datepicker");
      var instances = M.Datepicker.init(elems, {});
    });
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".timepicker");
      var instances = M.Timepicker.init(elems, {});
    });
  }

  render() {
    return (
      <div className="">
        <Header />
        <h2 style={{ color: "grey" }}>Your order History</h2>
        
        <div className="container">
          <div className="row">
            <div className="col s12 l3 ">
              <NavLink exact to="/restaurants/food">
                <div className="card hoverable modal-trigger" href="#modal1">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img
                      width="50"
                      height="150"
                      className="activator"
                      src={burger}
                    />
                  </div>
                  <div className="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                      Burger
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
              <NavLink exact to="/restaurants">
                <div className="card hoverable modal-trigger" href="#modal1">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img
                      width="50"
                      height="150"
                      className="activator"
                      src={pizza}
                    />
                  </div>
                  <div className="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                      Pizza
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
              <NavLink exact to="/restaurants">
                <div className="card hoverable modal-trigger" href="#modal1">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img
                      width="50"
                      height="150"
                      className="activator"
                      src={chinese}
                    />
                  </div>
                  <div className="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                      Chinese
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
              <NavLink exact to="/restaurants">
                <div className="card hoverable modal-trigger" href="#modal1">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img
                      width="50"
                      height="150"
                      className="activator"
                      src={pureveg}
                    />
                  </div>
                  <div className="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                      Pure-veg
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
              <NavLink exact to="/restaurants">
                <div className="card hoverable modal-trigger" href="#modal1">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img
                      width="50"
                      height="150"
                      className="activator"
                      src={buffet}
                    />
                  </div>
                  <div className="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                      Buffet
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
              <NavLink exact to="/restaurants">
                <div className="card hoverable modal-trigger" href="#modal1">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img
                      width="50"
                      height="150"
                      className="activator"
                      src={barbeque}
                    />
                  </div>
                  <div className="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                      barbeque
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
              <NavLink exact to="/restaurants">
                <div className="card hoverable modal-trigger" href="#modal1">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img
                      width="50"
                      height="150"
                      className="activator"
                      src={biryani}
                    />
                  </div>
                  <div className="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                      Biryani
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
              <NavLink exact to="/restaurants">
                <div className="card hoverable modal-trigger" href="#modal1">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img
                      width="50"
                      height="150"
                      className="activator"
                      src={regularfood}
                    />
                  </div>
                  <div className="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                      Regional-Flavour
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

          <div id="modal1" class="modal">
            <div class="modal-content">
              <h4>Book Your Meal</h4>
              <p>book table at "restaurant name"</p>
              <p>you ordered "food name"</p>
              <div className="row">
                <div class="input-field col s6">
                  <input id="last_name" type="number" class="validate" />
                  <label for="last_name">Person</label>
                </div>
                <div class="input-field col s6">
                  <input type="text" class="datepicker" />
                  <label for="last_name">Date</label>
                </div>
                <div class="input-field col s6">
                  <input type="text" class="timepicker" />
                  <label for="last_name">Time</label>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <a
                href="#!"
                class="modal-close waves-effect waves-green btn-flat"
              >
                Agree
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
