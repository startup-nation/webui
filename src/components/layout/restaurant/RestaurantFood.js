import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import M from "materialize-css";
export default class RestaurantFood extends Component {
    componentDidMount() {
        document.addEventListener("DOMContentLoaded", function() {
          var elems = document.querySelectorAll(".modal");
          var instances = M.Modal.init(elems, {});
        });
    }
render() {
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


      <div className="col s12 l10" style={{paddingTop:10}}>
      <a className="center-align waves-effect waves-light btn indigo modal-trigger" href="#modal2" >
            Add Food
        </a>
      <table>
        <thead>
          <tr>
              <th>Food Name</th>
              <th>Item Name</th>
              <th>Item Price</th>
              <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alvin</td>
            <td>Eclair</td>
            <td>$0.87</td>
            <td>
                  {" "}
                  <a className="btn-floating btn-small waves-effect waves-light red">
                    <i className="material-icons">clear</i>
                  </a>{" "}
                  <a className="btn-floating btn-small waves-effect waves-light amber accent-4">
                    <i className="material-icons">edit</i>
                  </a>
            </td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td>$3.76</td>
            <td>
                  {" "}
                  <a className="btn-floating btn-small waves-effect waves-light red">
                    <i className="material-icons">clear</i>
                  </a>{" "}
                  <a className="btn-floating btn-small waves-effect waves-light amber accent-4">
                    <i className="material-icons">edit</i>
                  </a>
            </td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
            <td>
                  {" "}
                  <a className="btn-floating btn-small waves-effect waves-light red">
                    <i className="material-icons">clear</i>
                  </a>{" "}
                  <a className="btn-floating btn-small waves-effect waves-light amber accent-4">
                    <i className="material-icons">edit</i>
                  </a>
            </td>
          </tr>
          
        </tbody>
      </table>

   
      </div>

      <div id="modal2" class="modal">
            <div class="modal-content">
              
              <p>book table at "restaurant name"</p>
              <p>Add Food</p>
              <div className="row">
                <div class="input-field col s6">
                  <input id="food_name" type="text" class="validate" />
                  <label for="food_name">Food Name</label>
                </div>
                <div class="input-field col s6">
                  <input type="text" class="validate" />
                  <label for="food_price">Food Price</label>
                </div>
                <div class="input-field col s6">
                  <input type="text" class="validate" />
                  <label for="food_type">Food Type</label>
                </div>
                <div class="input-field col s6">
                  <input type="text" class="validate" />
                  <label for="foord_description">Food Description</label>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <a
                href="#!"
                class="modal-close waves-effect waves-green btn-flat"
              >
                Add
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