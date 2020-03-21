import React from "react";
import { NavLink } from "react-router-dom";

export default function RestaurantDashboard() {
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
            <a href="#" data-activates="slide-out" className="button-collapse">
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

        <li id="dash_dashboard" className=" red lighten-5">
          <a className="waves-effect" href="">
            <i className="material-icons" style={{ padding: "20px" }}>
              dashboard
            </i>
            <b>Dashboard</b>
          </a>
        </li>
        <li id="dash_dashboard">
          <a className="waves-effect" href="">
            <i className="material-icons" style={{ padding: "20px" }}>
              restaurant
            </i>
            <b>Table</b>
          </a>
        </li>
        <NavLink to="/Restaurant/RestaurantFood">
        <li id="dash_dashboard">
          <a className="waves-effect" href="">
            <i className="material-icons" style={{ padding: "20px" }}>
              account_box
            </i>
            <b>Food</b>
          </a>
        </li>
        </NavLink>
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
      <div className="col s12 l10" style={{ padding: "10px" }}>


        <div className="col s12 l4">
          <div className="card hoverable gradient-45deg-purple-deep-orange gradient-shadow">
            <div className="card-content">
              <span className="center-align indigo-text">
                <b>Today's Customer</b>
              </span>
              <h2 className="center-align indigo-text">75</h2>
            </div>
          </div>
        </div>



        <div className="col s12 l4">
          <div className="card hoverable gradient-45deg-purple-deep-orange gradient-shadow">
            <div className="card-content">
              <span className="center-align indigo-text"><b>Today's Sale</b></span>
              <h2 className="center-align indigo-text">250000</h2>
            </div>
          </div>
        </div>

        <div className="col s12 l4">
          <div className="card hoverable gradient-45deg-purple-deep-orange gradient-shadow">
            <div className="card-content">
              <span className="center-align indigo-text"><b>Total Profit</b></span>
              <h2 className="center-align indigo-text">50000</h2>
            </div>
          </div>
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
