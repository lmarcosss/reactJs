import React, { Component } from "react";
//import { Redirect } from "react-router-dom";
import "./styles.css";
import FormLogin from "../../component/formLogin";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: false
    };
    this.changeForHome = this.changeForHome.bind(this);
  }

  changeForHome() {
    this.setState({ home: true });
  }

  render() {
    return (
      <div className="login">
        <FormLogin
          email={this.state.email}
          password={this.state.password}
          handleChange={this.handleChange}
          changeForHome={this.changeForHome}
        />
      </div>
    );
  }
}
