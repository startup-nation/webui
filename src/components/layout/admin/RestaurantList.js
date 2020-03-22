import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import M from "materialize-css";
import $ from "jquery";
export default class RestaurantList extends Component {
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
        <div className="col s12 l2">
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
              <h4 style={{ marginTop: "-8%" }}>ADMIN</h4>
              <h6>Book My Meal</h6>
            </div>
          </div>
        </li>
        <NavLink to="/admin/dashboard">
        <li id="dash_dashboard">
          <a className="waves-effect" href="">
            
            <b>Dashboard</b>
          </a>
        </li>
        </NavLink>
        <NavLink to="/admin/restaurantList">
        <li id="dash_dashboard" className="active  red lighten-5" >
          <a className="waves-effect" href="">
            
            <b>Restaurant</b>
          </a>
        </li>
        </NavLink>
        <li id="dash_dashboard">
          <a className="waves-effect" href="">
            
            <b>User</b>
          </a>
        </li>
      </ul>
      </div>

        <div className="col s12 l10" style={{ paddingTop: 10 }}>
          <table>
            <thead>
              <tr>
                <th>Restaurant Name</th>
                <th>Restaurant Location </th>
                <th>Restaurant Phoneno</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Alvin</td>
                <td>Eclair</td>
                <td>01735618573</td>
                <td>
                  {" "}
                  <a
                    className="btn-floating btn-small waves-effect waves-light red modal-trigger"
                    href="#modaldelete"
                  >
                    <i className="material-icons">delete_forever</i>
                  </a>{" "}
                  <a
                    className="btn-floating btn-small waves-effect waves-light amber accent-4 modal-trigger"
                    href="#modaledit"
                  >
                    <i className="material-icons">edit</i>
                  </a>
                  {" "}
                  <a className="btn-floating btn-small waves-effect waves-light indigo accent-4 modal-trigger"
            href="#modalmsg">
                    <i className="material-icons">message</i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Alan</td>
                <td>Jellybean</td>
                <td>01788459537</td>
                <td>
                  {" "}
                  <a className="btn-floating btn-small waves-effect waves-light red">
                    <i className="material-icons">delete_forever</i>
                  </a>{" "}
                  <a className="btn-floating btn-small waves-effect waves-light amber accent-4">
                    <i className="material-icons">edit</i>
                  </a>
                  {" "}
                  <a className="btn-floating btn-small waves-effect waves-light indigo accent-4 modal-trigger"
            href="#modalmsg">
                    <i className="material-icons">message</i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Jonathan</td>
                <td>Lollipop</td>
                <td>01788406593</td>
                <td>
                  {" "}
                  <a className="btn-floating btn-small waves-effect waves-light red">
                    <i className="material-icons">delete_forever</i>
                  </a>{" "}
                  <a className="btn-floating btn-small waves-effect waves-light amber accent-4">
                    <i className="material-icons">edit</i>
                  </a>
                  {" "}
                  <a className="btn-floating btn-small waves-effect waves-light indigo accent-4 modal-trigger"
            href="#modalmsg">
                    <i className="material-icons">message</i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div id="modalmsg" className="modal">
          <div className="modal-content">
            <p>SENT A MESSAGE TO "restaurant name"</p>
           
            <div className="row">
              <div className="input-field col s6">
                <input id="food_name" type="text" className="validate" />
                <label htmlFor="food_name">Subject</label>
              </div>
              <div class="input-field col s6">
                <textarea id="textarea2" class="materialize-textarea" data-length="120"></textarea>
                <label for="textarea2">Textarea</label>
                </div>
              <div class="file-field input-field col s12">
                <div class="btn">
                  <span>File</span>
                  <input type="file" />
                </div>
                <div class="file-path-wrapper">
                  <input class="file-path validate" type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat"
            >
              sent
            </a>
          </div>
        </div>

        <div id="modaledit" className="modal">
          <div className="modal-content">
            <p>edit "restaurant name"</p>
            
            <div className="row">
              <div className="input-field col s6">
                <input id="food_name" type="text" className="validate" />
                <label htmlFor="food_name">Restaurant Name</label>
              </div>
              <div className="input-field col s6">
                <input type="text" className="validate" />
                <label htmlFor="food_price">Restaurant Location </label>
              </div>
              <div className="input-field col s6">
                <input type="text" className="validate" />
                <label htmlFor="food_type">Restaurant PhoneNo</label>
              </div>
              <div className="input-field col s6">
                <input type="text" className="validate" />
                <label htmlFor="foord_description">Restaurant Email</label>
              </div>

              <div class="file-field input-field col s12">
                <div class="btn">
                  <span>File</span>
                  <input type="file" />
                </div>
                <div class="file-path-wrapper">
                  <input class="file-path validate" type="text" />
                </div>
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

        <div id="modaldelete" className="modal">
          <div className="modal-content">
            <h5>delete this??</h5>
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
