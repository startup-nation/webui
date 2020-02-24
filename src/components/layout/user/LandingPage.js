import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import image1 from "../../img/imageone.jpg";
import image2 from "../../img/2.jpg";
import image3 from "../../img/3.jpg";
import image4 from "../../img/4.jpg";
import image5 from "../../img/5.jpg";
import search from "../../img/loupe.png";
import calendar from "../../img/calendar.png";
import table from "../../img/dining-table.png";
import food from "../../img/food.png";
import mobile from "../../img/trymobile.jpg";
import breakfast from '../../img/breakfast.jpg';
import lunch from '../../img/lunch.jpg';
import dinner from '../../img/dinner.jpg';
import Restaurants from "../common/Restaurants";
import Footer from '../common/Footer';
export default function LandingPage() {
  return (
    <div className="row">
      <div className="row section">
        <img width="1900" height="500" opacity="0.2" src={image5} />
      </div>
      <br />
      <div className="row section">
        <h4>Best restaurants in Dhaka delivering to your doorstep</h4>
      </div>
      <div className="container">
        <h5>How It Works</h5>
        <h6>Ordering food online has never been this easy</h6>
        <div className="row">
          <div className="col s12 l3">
            <img wigth="150" height="150" src={search} />
            <h5>Search Restaurant</h5>
          </div>

          <div className="col s12 l3">
            <img wigth="150" height="150" src={calendar} />

            <h5>Select Date/Time</h5>
          </div>
          <div className="col s12 l3">
            <img wigth="150" height="150" src={table} />

            <h5>Reserve your Table</h5>
          </div>
          <div className="col s12 l3">
            <img wigth="150" height="150" src={food} />

            <h5>Get served instantly</h5>
          </div>
        </div>
      </div>
      <br />
      <div className="contents container">
        <h4>Explore restaurant in your city</h4>
        <br />
        <div className="row">
          <div className="col s12 l3">
            <NavLink exact to="/restaurants">
              <div className="card hoverable ">
                <div className="card-image waves-effect waves-block waves-light">
                  <img
                    width="50"
                    height="150"
                    className="activator"
                    src={image3}
                  />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    Shyamoli
                    <i className="material-icons right" style={{ color: "pink" }}>
                      send
                    </i>
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col s12 l3">
          <NavLink exact to="/restaurants">
            <div className="card hoverable ">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  width="50"
                  height="150"
                  className="activator"
                  src={image1}
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Dhanmondi
                  <i className="material-icons right" style={{ color: "yellow" }}>
                    send
                  </i>
                </span>
              </div>
            </div>
            </NavLink>
          </div>
          <div className="col s12 l3">
          <NavLink exact to="/restaurants">
            <div className="card hoverable ">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  width="50"
                  height="150"
                  className="activator"
                  src={image2}
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Banani
                  <i className="material-icons right" style={{ color: "red" }}>
                    send
                  </i>
                </span>
              </div>
            </div>
            </NavLink>
          </div>
          <div className="col s12 l3">
          <NavLink exact to="/restaurants">
            <div className="card hoverable ">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  width="50"
                  height="150"
                  className="activator"
                  src={image4}
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Uttara
                  <i className="material-icons right" style={{ color: "brown" }}>
                    send
                  </i>
                </span>
              </div>
            </div>
            </NavLink>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <h4>What kind of meal you want?</h4>
        <br/>
        <div className="row">
        <div className="col s12 l4">
            <div className="card hoverable ">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  width="50"
                  height="200"
                  className="activator"
                  src={breakfast}
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Breakfast
                  <i className="material-icons right" style={{ color: "blue" }}>
                    send
                  </i>
                </span>
              </div>
            </div>
          </div>
          <div className="col s12 l4">
            <div className="card hoverable ">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  width="50"
                  height="200"
                  className="activator"
                  src={lunch}
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Lunch
                  <i className="material-icons right" style={{ color: "blue" }}>
                    send
                  </i>
                </span>
              </div>
            </div>
          </div>
          <div className="col s12 l4">
            <div className="card hoverable ">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  width="50"
                  height="200"
                  className="activator"
                  src={dinner}
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Dinner
                  <i className="material-icons right" style={{ color: "blue" }}>
                    send
                  </i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contents container">
        <div className="row">
          <div className="col s12 l6">
            <div className="card hoverable ">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  width="50"
                  height="200"
                  className="activator"
                  src={image3}
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Customer Review
                  <i className="material-icons right" style={{ color: "blue" }}>
                    send
                  </i>
                </span>
              </div>
            </div>
          </div>
          <NavLink exact to="/restaurant/registration">
          <div className="col s12 l6">
            <div className="card hoverable ">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  width="50"
                  height="200"
                  className="activator"
                  src={image2}
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  For Restaurants
                  <i className="material-icons right" style={{ color: "orange" }}>
                    send
                  </i>
                </span>
              </div>
            </div>
          </div>
          </NavLink>
        </div>
      </div>
      <br />
      <div className="contents container">
        <div className="row">
          <div className="col s12 l12">
            <div className="col s12 l6">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  width="500"
                  height="250"
                  className="activator"
                  src={mobile}
                />
              </div>
            </div>
            <div className="col s12 l6">
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  <h4>Try our App & Book on the Go</h4>
                  <p>
                    Discover exclusive deals, browse nearby restaurants & manage
                    your bookings in the app. Free to download, free to book.
                  </p>
                </span>
                <p>
                  <a href="">Download To Dine</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/restaurants" component={Restaurants} />
      </Switch>
      <Footer/>
    </div>
  );
}
