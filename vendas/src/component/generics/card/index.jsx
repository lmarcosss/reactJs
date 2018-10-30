import React, { Component } from "react";
import { Card, CardImg } from "reactstrap";
import CardBody from "./cardBody";
import "./styles.css";
class CardProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card onClick={null} className="card">
        <CardImg
          className="cardImage"
          src={this.props.image}
          alt={this.props.alt}
        />
        <CardBody
          title={this.props.title}
          price={this.props.price}
          text={this.props.text}
        />
      </Card>
    );
  }
}
export default CardProduct;
