import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card/card";
import imageDp from "./images/deadPool.jpg";
import imageWolverine from "./images/wolverine.jpg";
import imageProfessor from "./images/professor.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadPool: {
        name: "Slade Wilson",
        lastName: "DeadPool",
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
        lastName: "Wolverine",
        dataNascimento: "01/03/1995",
        pais: "Brasil",
        status: "offline",
        image: imageWolverine
      },
      leonardo: {
        name: "Leonardo",
        lastName: "Marcos",
        dataNascimento: "01/03/1995"
      }
    };
  }
  
  render() {
    return (
      <div className="App">
        {[
          this.state.deadPool,
          this.state.professor,
          this.state.wolverine,
          this.state.leonardo,
          new Object()
        ].map((personagem, index) => (
          <Card
            key={index}
            card={personagem}
            onClick={function(e) {
              alert(personagem.name +" clicou");  
            }}
          />
        ))}
      </div>
    );
  }
}

export default App;
