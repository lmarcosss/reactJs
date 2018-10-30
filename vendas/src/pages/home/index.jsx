import React, { Component } from "react";
import NavBar from "../../component/generics/navBar";
import CardProduct from "../../component/generics/card";
import "./styles.css";
import dados from "../../dados.js";
export default class Home extends Component {
  renderProducts() {
    return dados.map((dado, i) => {
      return (
        <CardProduct
          key={i}
          title={dado.title}
          price={dado.price}
          text={dado.text}
          image={dado.image}
        />
      );
    });
  }
  render() {
    return (
      <div className="home">
        <NavBar />
        <div className="products">{this.renderProducts()}</div>
      </div>
    );
  }
}
