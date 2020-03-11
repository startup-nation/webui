import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import image1 from "../../img/5.jpg";
import burger from '../../img/burger.jpg';
import pizza from '../../img/pizza.jpg';
import barbeque from '../../img/barbeque.jpg';
import biryani from '../../img/biryani.jpg';
import pureveg from '../../img/pure-veg.jpg';
import regularfood from '../../img/regular-food.jpg';
import chinese from '../../img/chinese.jpg';
import buffet from '../../img/buffet.jpg';
import Header from "../common/Header";
import M from "materialize-css";
export default class Food extends Component {


  componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, {});
    });
  }

  render(){
  return (
    <div className="">
      <Header />
      <h2 style={{color: "grey"}}>Dhaka Restaurants Food</h2>
      <h4>Dine out in your city… explore Dhaka restaurants</h4>
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
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>

      </div>
    </div>
  );
}
}
