import React, { Component } from "react";
import "./styles.css";
class Alert extends Component {
  render() {
    return <div className={this.props.typeAlert}>{this.props.message}</div>;
  }
}
export default Alert;
