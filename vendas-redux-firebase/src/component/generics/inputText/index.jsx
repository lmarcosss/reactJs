import React, { Component } from "react";
import { Input, Label, FormGroup } from "reactstrap";
class InputText extends Component {
  render() {
    return (
      <FormGroup>
        <Label for={this.props.name}>{this.props.text}</Label>
        <Input
          type={this.props.type}
          name={this.props.name}
          id={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </FormGroup>
    );
  }
}
export default InputText;
