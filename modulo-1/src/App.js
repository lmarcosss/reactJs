import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import imageDp from "./images/deadPool.jpg";
import imageWolverine from "./images/wolverine.jpg";
import imageProfessor from "./images/professor.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadPool: {
        name: "Slade",
        lastName: "Wilson",
        dataNascimento: "01/03/1995",
        pais: "Brasil",
        status: "online",
        image: imageDp
      },
      professor: {
        name: "Professor",
        lastName: "Xavier",
        dataNascimento: "01/03/1995",
        pais: "Brasil",
        status: "busy",
        image: imageProfessor
      },
      wolverine: {
        name: "Logan",
        lastName: "",
        dataNascimento: "01/03/1995",
        pais: "Brasil",
        status: "offline",
        image: imageWolverine
      },

    };
  }
  render() {
    return (
      <div className="App">
        {[this.state.deadPool, this.state.professor, this.state.wolverine].map((personagem, index) => (
          <Card key={index} card={personagem} />
        ))}
      </div>
    );
  }
}

export default App;
