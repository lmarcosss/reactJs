import React, { Component } from "react";
import Title from "../Title/Title";
import defaultImage from "../../images/defaultImage.png";
import "./card.css";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: this.props.card
    };
  }

  static defaultProps = {
    card: {
      image: defaultImage,
      dataNascimento: "01/01/2001",
      pais: "Brasil",
      status: "offline"
    }
  };

  render() {
    return (
      <div className="card-container">
        <img className={"imagem-perfil " + this.state.card.status} src={this.state.card.image} />
        <div className="info">
          <Title
            name={this.state.card.name}
            lastName={this.state.card.lastName}
          />
        </div>
      </div>
    );
  }
}
