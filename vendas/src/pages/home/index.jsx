import React, { Component } from "react";
import NavBar from "../../component/generics/navBar";
import CardProduct from "../../component/generics/card";
import { Redirect, Route, Switch } from "react-router-dom";
import "./styles.css";
import dados from "../../dados.js";
import Product from "../product/index";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: false,
      productSelected: {}
    };
    this.redirectProduct = this.redirectProduct.bind(this);
  }

  redirectProduct(dado) {
    this.setState({
      product: true,
      productSelected: dado
    });
  }

  renderProducts() {
    return dados.map((dado, i) => {
      return (
        <CardProduct
          key={i}
          title={dado.title}
          price={dado.price}
          text={dado.text}
          image={dado.image}
          onClick={() => this.redirectProduct(dado)}
        />
      );
    });
  }

  render() {
    if (this.state.product) {
      return (
        <Product
          renderHome={() => this.setState({ product: false })}
          product={this.state.productSelected}
        />
      );
    }
    return (
      <div className="home">
        <NavBar />
        <div className="products">{this.renderProducts()}</div>
      </div>
    );
  }
}
