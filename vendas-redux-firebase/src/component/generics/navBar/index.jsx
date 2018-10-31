import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import "./styles.css";
import Navegacao from "./nav";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <Navbar className="navbar" color="faded" light>
        <NavbarBrand href="/home">
          <img
            src="https://www.equinix.com/application/dist/img/global/skinny-logo.png"
            alt="equinix"
            className="logo"
          />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <Navegacao collapsed={this.state.collapsed} />
      </Navbar>
    );
  }
}
export default NavBar;
