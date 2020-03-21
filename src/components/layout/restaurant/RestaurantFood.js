import React from "react";
import { NavLink } from "react-router-dom";

export default function RestaurantFood() {
  return (
    <div className="row">
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
        <li id="dash_dashboard" className="red lighten-5">
          <a className="waves-effect" href="">
            <i className="material-icons" style={{ padding: "20px" }}>
              dashboard
            </i>
            <b>Dashboard</b>
          </a>
        </li>
        </NavLink>
        <li id="dash_dashboard">
          <a className="waves-effect" href="">
            <i className="material-icons" style={{ padding: "20px" }}>
              restaurant
            </i>
            <b>Table</b>
          </a>
        </li>
        <li id="dash_dashboard">
          <a className="waves-effect" href="">
            <i className="material-icons" style={{ padding: "20px" }}>
              account_box
            </i>
            <b>Food</b>
          </a>
        </li>
        <li id="dash_dashboard">
          <a className="waves-effect" href="">
            <i className="material-icons" style={{ padding: "20px" }}>
              account_box
            </i>
            <b>Order</b>
          </a>
        </li>

        <ul className="collapsible" data-collapsible="accordion">
          <li id="dash_categories">
            <div
              id="dash_categories_header"
              className="collapsible-header waves-effect"
            >
              <b>Array</b>
              <i className="right material-icons">keyboard_arrow_down</i>
            </div>
            <div id="dash_categories_body" className="collapsible-body">
              <ul>
                <li id="categories_category">
                  <a
                    className="waves-effect"
                    style={{ textDecoration: "none" }}
                    href=""
                  >
                    One Dimensional Array
                  </a>
                </li>
                <li id="categories_sub_category">
                  <a
                    className="waves-effect"
                    style={{ textDecoration: "none" }}
                    href=""
                  >
                    Two Dimenstional Array
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </ul>

 </div>

      <div className="col s12 l10">
      <table>
        <thead>
          <tr>
              <th>Food Name</th>
              <th>Item Name</th>
              <th>Item Price</th>
              
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alvin</td>
            <td>Eclair</td>
            <td>$0.87</td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td>$3.76</td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
          </tr>
          <tr>
            <td>Alvin</td>
            <td>Eclair</td>
            <td>$0.87</td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td>$3.76</td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
          </tr>
        </tbody>
      </table>


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
