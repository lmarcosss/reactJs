import React, { Component } from "react";
import { Card, CardImg } from "reactstrap";
import CardBody from "./cardBody";
import "./styles.css";
class CardProduct extends Component {
  render() {
    return (
      <Card onClick={this.props.onClick} className="card">
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
