import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import M from "materialize-css";
export default class OrderHistory extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".modal");
      var instances = M.Modal.init(elems, {});
    });
  }
  render() {
    return (
      <div className="row">
        <header>
          <nav className="red darken-3 z-depth-1" role="navigation">
            <div className="nav-wrapper">
              <ul className="right hide-on-med-and-down">
                <li>
                  <a href="" className="toggle-fullscreen">
                    <i className="material-icons">account_circle</i>
                  </a>
                </li>
              </ul>
              <a
                data-activates="slide-out"
                className="button-collapse show-on-"
                href="#!"
              >
                <i className="material-icons">menu</i>
              </a>
              <a
                href="#"
                data-activates="slide-out"
                className="button-collapse"
              >
                <i className="mdi-navigation-menu"></i>
              </a>
            </div>
          </nav>
        </header>
        <div className="col s6 l2">
          <ul id="slide-out" className="side-nav fixed z-depth-2">
            <li className="center no-padding">
              <div
                className=" red darken-3  white-text"
                style={{ height: "180px" }}
              >
                <div className="row">
                  <i
                    className="devicon-coffeescript-original"
                    style={{ fontSize: "100px" }}
                  ></i>
                  <h4 style={{ marginTop: "-8%" }}>Restaurant</h4>
                  <h6>Book My Meal</h6>
                </div>
              </div>
            </li>
            <NavLink to="/Restaurant/RestaurantDashboard">
              <li id="dash_dashboard">
                <a className="waves-effect" href="">
                  <b>Dashboard</b>
                </a>
              </li>
            </NavLink>
            <li id="dash_dashboard">
              <a className="waves-effect" href="">
                <b>Table</b>
              </a>
            </li>
            <NavLink to="/Restaurant/RestaurantFood">
            <li id="dash_dashboard">
              <a className="waves-effect" href="">
                <b>Food</b>
              </a>
            </li>
            </NavLink>
            <li id="dash_dashboard">
              <a className="waves-effect" href="">
                <b>Order</b>
              </a>
            </li>
            <NavLink to="/Restaurant/orderHistory">
            <li id="dash_dashboard"  className="active red lighten-5">
              <a className="waves-effect" href="">
                <b>Order History</b>
              </a>
            </li>
            </NavLink>
          </ul>
        </div>

        <div className="col s12 l10" style={{ paddingTop: 10 }}>
          <table>
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Customer PhoneNo</th>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Alvin</td>
                <td>Eclair</td>
                <td>Eclair</td>
                <td>3</td>
                <td>$0.87</td>
                <td>$2.75</td>
                <td>
                  {" "}
                  <a
                    className="btn-floating btn-small waves-effect waves-light red modal-trigger"
                    href="#historymodaldelete"
                  >
                    <i className="material-icons">delete_forever</i>
                  </a>{" "}
                  <a
                    className="btn-floating btn-small waves-effect waves-light amber accent-4 modal-trigger"
                    href="#historymodaledit"
                  >
                    <i className="material-icons">edit</i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Alan</td>
                <td>Jellybean</td>
                <td>Eclair</td>
                <td>3</td>
                <td>$0.87</td>
                <td>$3.76</td>
                <td>
                  {" "}
                  <a className="btn-floating btn-small waves-effect waves-light red modal-trigger"
                    href="#historymodaldelete">
                    <i className="material-icons">delete_forever</i>
                  </a>{" "}
                  <a className="btn-floating btn-small waves-effect waves-light amber accent-4 modal-trigger"
                    href="#historymodaledit">
                    <i className="material-icons">edit</i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Jonathan</td>
                <td>Lollipop</td>
                <td>Eclair</td>
                <td>3</td>
                <td>$0.87</td>
                <td>$7.00</td>
                <td>
                  {" "}
                  <a className="btn-floating btn-small waves-effect waves-light red modal-trigger"
                    href="#historymodaldelete">
                    <i className="material-icons">delete_forever</i>
                  </a>{" "}
                  <a className="btn-floating btn-small waves-effect waves-light amber accent-4 modal-trigger"
                    href="#historymodaledit">
                    <i className="material-icons">edit</i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div id="historymodaledit" className="modal">
          <div className="modal-content">
            <p>Edit Food order info</p>
            <div className="row">
              <div className="input-field col s6">
                <input id="food_name" type="text" className="validate" />
                <label htmlFor="food_name">Food Name</label>
              </div>
              <div className="input-field col s6">
                <input type="text" className="validate" />
                <label htmlFor="food_price">Food Price</label>
              </div>
              <div className="input-field col s6">
                <input type="text" className="validate" />
                <label htmlFor="foord_description">Food quantity</label>
              </div>
              <div className="input-field col s6">
                <input type="text" className="validate" />
                <label htmlFor="foord_description">Total Price</label>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat"
            >
              Update
            </a>
          </div>
        </div>

        <div id="historymodaldelete" className="modal">
          <div className="modal-content">
            <h5>delete this order??</h5>
          </div>
          <div className="modal-footer">
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat"
            >
              Yes
            </a>
          </div>
        </div>
        {/* <footer
        id="index-footer-box"
        className="page-footer  footer-fixed red darken-3"
      >
        <div className="footer-copyright">
          <div className="container center">
            &copy; Copyright
            <script type="text/javascript">
              document.write(new Date().getFullYear());
            </script>
            <a href="https://github.com/" className="white-text">
              BookMyMeal
            </a>
          </div>
        </div>
      </footer> */}
      </div>
    );
  }
}
