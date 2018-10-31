import React, { Component } from "react";
import { Button, Input, Label, Form, FormGroup } from "reactstrap";
import Alert from "../generics/alert";
import InputText from "../generics/inputText";
import "./styles.css";
export default class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      visible: false,
      email: "",
      password: ""
    };
    this.onClickLogin = this.onClickLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onClickLogin() {
    if (this.state.email !== "leonardo" || this.state.password !== "1234") {
      this.setState({ error: "Senha ou E-mail invalidos.", visible: true });
      console.log("email: " + this.state.email);
    } else {
      this.props.changeForHome();
    }
  }

  renderError() {
    return this.state.visible ? (
      <Alert typeAlert="errorLogin" message={this.state.error} />
    ) : (
      undefined
    );
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Form>
        <InputText
          name="email"
          text="E-mail"
          onChange={this.handleChange}
          type="email"
          placeholder="your@email.com"
          value={this.state.email}
        />
        <InputText
          name="password"
          text="Password"
          onChange={this.handleChange}
          type="password"
          placeholder="Your password"
          value={this.state.password}
        />
        {this.renderError()}
        <Button
          onClick={this.onClickLogin}
          color="success"
          className="button-login"
        >
          Login
        </Button>
      </Form>
    );
  }
}
