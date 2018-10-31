import React, { Component } from "react";
import { CardBody, CardText, CardTitle, CardSubtitle } from "reactstrap";
class BodyCard extends Component {
  render() {
    return (
      <CardBody className="cardBody">
        <CardTitle>{this.props.title}</CardTitle>
        <CardSubtitle>{"R$" + this.props.price}</CardSubtitle>
        <CardText>{this.props.text}</CardText>
      </CardBody>
    );
  }
}
export default BodyCard;
