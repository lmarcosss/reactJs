import React, { Component } from "react";
import NavBar from "../../component/generics/navBar";
import CardProduct from "../../component/generics/card";
import { Redirect, Route, Switch } from "react-router-dom";
import "./styles.css";
import dados from "../../dados.js";
import Product from "../product/index";
import * as actions from "../../store/actions/";
import { connect } from "react-redux";
import _ from "lodash";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: false,
      productSelected: {}
    };
    this.redirectProduct = this.redirectProduct.bind(this);
  }

  componentWillMount() {
    console.log(this.props.data);
    this.props.selectAllProducts();
  }

  redirectProduct(dado) {
    this.setState({
      product: true,
      productSelected: dado
    });
  }

  renderProducts() {
    console.log(this.props);
    const { data } = this.props;
    return _.map(data, (dado, i) => {
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
    // if (this.state.product) {
    //   return (
    //     <Product
    //       renderHome={() => this.setState({ product: false })}
    //       product={this.state.productSelected}
    //     />
    //   );
    // }
    return (
      <div className="home">
        <NavBar />
        <div className="products">{this.renderProducts()}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(
  mapStateToProps,
  actions
)(Home);
