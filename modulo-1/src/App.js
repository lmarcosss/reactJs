import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import image from "./images/deadPool.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      object: {
        name: "Leonardo",
        lastName: "Marcos",
        dataNascimento: "01/03/1995",
        pais: "Brasil",
        image: image
      }
    };
  }
  render() {
    return (
      <div className="App">
        <Card card={this.state.object} />
      </div>
    );
  }
}

export default App;
