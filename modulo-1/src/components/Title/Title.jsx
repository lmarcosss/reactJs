import React, { Component } from "react";

export default class Title extends Component {
  constructor() {
    super();
  }

  static defaultProps = {
    name: "Desconhecido",
    lastName: "Sem sobrenome"
  };

  render() {
    return <h1>Olá, {this.props.name} {this.props.lastName}!</h1>;
  }
}
