import React from "react";
//import { Link } from "gatsby";

import logo from "../img/CEDAR-LOGO-FINAL.svg";

import { Link } from 'react-scroll'


const Navbar = class extends React.Component {
  state = {
    open: false,
  }
  handleButtonClick = () => {
      this.setState(state => {
        return {
          open: !state.open,
        };
      });
    };


  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="inside-xxl always-flex justify relative">
          <div className="logo-brand">
            <Link to="therest" className="navbar-item" title="Logo">
              <img src={logo} alt="Cedar Motel" />
            </Link>
            
            <div className={this.state.open ? "hamburger active" : "hamburger" }>

              <div className="ham-trigger flex-vertical" onClick={this.handleButtonClick} onKeyDown={this.handleButtonClick} role="button" tabIndex="0">
                  <div className={this.state.open ? "ham-button active" : "ham-button" }>
                      <span className="line line-1"></span>
                      <span className="line line-2"></span>
                      <span className="line line-3"></span>
                  </div>
              </div>

            </div>

          </div>

          <div className="fake-flex"></div>

          <div
            id="navMenu"
            className={`navbar-menu always-flex ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start center-text always-flex">

              <Link activeClass="active" className="pointy-button" to="anchor-reservations" spy={true} smooth={true} duration={1000}>
                Reservations
              </Link>

              <Link activeClass="active" className="pointy-button" to="anchor-about" spy={true} smooth={true} duration={1000}>
                About
              </Link>

              <Link activeClass="active" className="pointy-button" to="anchor-accommodations" spy={true} smooth={true} duration={1000}>
                Accommodations
              </Link>

              <Link activeClass="active" className="pointy-button" to="anchor-gallery" spy={true} smooth={true} duration={1000}>
                Gallery
              </Link>

              <Link activeClass="active" className="pointy-button" to="anchor-findus" spy={true} smooth={true} duration={1000}>
                Find Us
              </Link>
              
            </div>

            
          </div>

          <div className="social">
            <a className="facebook" href="https://www.facebook.com/thecedarmotel"><span>Facebook</span></a>
            {/*<a className="instagram" href="https://instagram.com"><span>Instagram</span></a>*/}
          </div>

          

        </div>
      </nav>
    );
  }
};

export default Navbar;
