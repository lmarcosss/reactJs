import React, { Component } from "react";
import Title from "../Title/title";
import Button from "../Button/button";
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
      pais: "Brasil",
      status: "offline"
    }
  };

  renderImagem() {
    if (this.state.card.image === undefined) {
      return <img className="imagem-perfil offline" src={defaultImage} />;
    } else {
      return (
        <img
          className={"imagem-perfil " + this.state.card.status}
          src={this.state.card.image}
        />
      );
    }
  }

  render() {
    console.log(this.state.card);
    return (
      <div className="card-container">
        {this.renderImagem()}
        <div className="info">
          <Title
            name={this.state.card.name}
            lastName={this.state.card.lastName}
          />
        </div>
        <Button onClick={this.props.onClick} text="Adicionar" className="blue medium"/>
      </div>
    );
  }
}
