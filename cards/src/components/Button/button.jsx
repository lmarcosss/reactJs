import React, { Component } from "react";
import "./button.css";

export default class button extends Component {
  render() {
    return (
      <button className={this.props.className} onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}
