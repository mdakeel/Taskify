import React, { Component } from "react";
import image from "../../assets/Images/image";
import { NavLink } from "react-router-dom";
import "./HomeNavbar.css";

class HomeNavbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <div className="home-nav">
          <div className="home-navbar-nav">
            <div className="home-logo">
              <img src={image.taskify} alt="taskify" />
            </div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li className="active">
                <a href="" className="active">
                  <NavLink to="/">Home</NavLink>
                </a>
              </li>
              <li>
                <a href="">
                  <NavLink to="/about">About</NavLink>
                </a>
              </li>
              <li>
                <a href="">
                  <NavLink to="/Studentlogin" className="cursor-pointer">
                    <p className="cursor-pointer">login</p>
                  </NavLink>
                </a>
              </li>
            </ul>
          </div>
          <div id="mobile-nav" onClick={this.handleClick}>
            <i
              id="fa"
              className={this.state.clicked ? "fa fa-times" : "fa fa-bars"}
            ></i>
          </div>
        </div>
      </>
    );
  }
}

export default HomeNavbar;
