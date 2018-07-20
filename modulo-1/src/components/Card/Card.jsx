import React, { Component } from "react";
import Title from "../Title/Title";
import defaultImage from "../../images/defaultImage.png";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: this.props.card
    };
  }

  static defaultProps = {
    card: {
      image: defaultImage
    }
  };

  render() {
    return (
      <div>
        <Title name={this.state.card.name} lastName={this.state.card.lastName}/>
        <img src={this.state.card.image} />
      </div>
    );
  }
}
