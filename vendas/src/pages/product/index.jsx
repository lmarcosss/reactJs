import React, { Component } from "react";
import NavBar from "../../component/generics/navBar/";
import {
  Button,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from "reactstrap";
import "./styles.css";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product
    };
  }
  render() {
    return (
      <div className="product-page">
        <NavBar />
        <div className="product-content">
          <div className="product-item">
            <CardImg className="card-image" src={this.state.product.image} />
            <div className="productBody">
              <CardBody className="card-body">
                <CardTitle>{this.state.product.title}</CardTitle>
                <CardSubtitle>{"R$" + this.state.product.price}</CardSubtitle>
                <CardText>{this.state.product.text}</CardText>
                <div className="buttons">
                  <Button color="success">Comprar</Button>
                </div>
              </CardBody>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
