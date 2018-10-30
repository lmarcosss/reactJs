import React, { Component } from "react";
import { NavItem, NavLink } from "reactstrap";
class ItemNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NavItem className="navItem">
        <NavLink href={this.props.href}>{this.props.text}</NavLink>
      </NavItem>
    );
  }
}
export default ItemNavBar;
