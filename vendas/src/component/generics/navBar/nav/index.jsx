import React, { Component } from "react";
import { Nav, NavItem, NavLink, Collapse } from "reactstrap";
import ItemNavBar from "./navItem";
class Navegacao extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Collapse isOpen={!this.props.collapsed} navbar>
        <Nav className="nav" navbar>
          <ItemNavBar text="Cadastro de Produtos" href="/cadastro-produtos" />
          <ItemNavBar
            text="GitHub"
            href="https://github.com/reactstrap/reactstrap"
          />
          <ItemNavBar text="Logout" href="/login" />
        </Nav>
      </Collapse>
    );
  }
}
export default Navegacao;
