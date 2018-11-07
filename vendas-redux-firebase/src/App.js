import React, { Component } from "react";
import "./App.css";
//import Login from "./pages/login/index";
import Home from "./pages/home/index";
import Product from "./pages/product/index";
import FormProduct from "./component/formProduct/";
import { Switch, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {/* <Route exact={true} path="/" component={Login} />
          <Route path="/login" component={Login} /> */}
          <Route exact strict path="/home" component={Home} />
          <Route
            exact
            strict
            path="/register-product"
            component={FormProduct}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
