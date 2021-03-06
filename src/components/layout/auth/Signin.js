import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Header from '../common/Header';
import axios from 'axios';
 class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
        email: '',
        password: ''
    }
  }

  changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('https://bookmymealapiaplha.herokuapp.com/api/User/Login', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
    }


  render() {
  const { email, password } = this.state  

  return (
    <div className="contents">
      <Header/>
      <form onSubmit={this.submitHandler}>
        <div className="container">
          <div className="row">
            <div className="center-align">
              <h4 className="indigo-text text-darken-3">Sign In</h4>
            </div>
            <div className="card col s12 l12 z-depth-2 card-border">
              <div className="card-content">
               
                <div className="col s12 l12" id="info-input-field">
                  <div className="row">
                    <div className="input-field col s12 l12">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.changeHandler}
                        className="form-control"
                        required
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 l12">
                      <input
                        id="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.changeHandler}
                        className="validate"
                        required
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="center-align">
                      <NavLink onClick={this.submitHandler}
                        to="/userProfile"
                        className="waves-effect btn waves-light indigo"
                        
                      >
                        Login
                        <i className="material-icons right">send</i>

                      </NavLink>
                      <br />
                      <br />
                    
                      <span className="clink">
                        <NavLink exact to="/signup" className="waves-effect btn waves-light indigo">
                          Login with Facebook
                        </NavLink>
                      </span><br/><br/>
                      <span className="clink">
                        Forgot Password!!!&nbsp;{" "}
                        <NavLink exact to="/signin">
                          click here
                        </NavLink>
                      </span>
                      <br/>
                      <span className="clink">
                        Create an account&nbsp;{" "}
                        <NavLink exact to="/signup">
                          SignUp
                        </NavLink>
                      </span>
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
 }
export default Signin;