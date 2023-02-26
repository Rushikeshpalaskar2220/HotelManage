import { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  handleLinkClick = () => {
    this.setState({ clicked: false });
  };
  
  render() {
    return (
      <>
        <nav>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <img src="./images/logo.png" alt="name" className="logo-img" />
              <li>
                <a className="active" href="#home" onClick={this.handleLinkClick}>
                  Home
                </a>
              </li>
              <li>
                <a href="#Vision"   onClick={this.handleLinkClick}>Vision </a>
              </li>
              <li>
                <a href="#Testimonials"  onClick={this.handleLinkClick}>Testimonials</a>
              </li>
              <li>
                <a href="#Menu"  onClick={this.handleLinkClick}>Menu</a>
              </li>
              <li>
                <a href="#Map" onClick={this.handleLinkClick}>Contact</a>
              </li>
             
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
           <div>
              <a href="https://wa.me/9822380705" class="order-button">Order Now 🍴 </a>
              </div>
        </nav>
      </>
    );
  }
}

export default Navbar; 