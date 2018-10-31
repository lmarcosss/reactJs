import React, { Component } from "react";
import "./App.css";
//import Login from "./pages/login/index";
import Home from "./pages/home/index";
import Product from "./pages/product/index";
import { Switch, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {/* <Route exact={true} path="/" component={Login} />
          <Route path="/login" component={Login} /> */}
          <Route exact strict patch="/home" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
