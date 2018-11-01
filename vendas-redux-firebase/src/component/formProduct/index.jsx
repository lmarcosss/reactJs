import React, { Component } from "react";
import { Button, Form } from "reactstrap";
import InputText from "../generics/inputText";
import NavBar from "../generics/navBar/";
import { addProduct } from "../../store/actions/";
import { connect } from "react-redux";

import "./styles.css";
class FormProduct extends Component {
  state = {
    title: "",
    price: "",
    text: "",
    image: ""
  };

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    const { addProduct } = this.props;
    const object = {
      title: this.state.title,
      price: this.state.price,
      text: this.state.text,
      image: this.state.image
    };
    event.preventDefault();
    addProduct(object);
    this.setState({
      title: "",
      price: "",
      text: "",
      image: ""
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="content-form-product">
          <Form
            className="form-product"
            onSubmit={event => this.handleFormSubmit(event)}
          >
            <InputText
              name="title"
              type="text"
              text="Titulo"
              value={this.state.title}
              onChange={event => this.handleChange(event)}
            />
            <InputText
              name="price"
              type="number"
              min="1"
              step="any"
              text="Preço"
              value={this.state.price}
              onChange={event => this.handleChange(event)}
            />
            <InputText
              name="text"
              type="text"
              text="Descrição"
              value={this.state.text}
              onChange={event => this.handleChange(event)}
            />
            <InputText
              name="image"
              type="text"
              text="Imagem"
              value={this.state.image}
              onChange={event => this.handleChange(event)}
            />
            <Button className="button-form-product" color="success">
              Salvar
            </Button>
          </Form>
        </div>
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
  { addProduct }
)(FormProduct);
