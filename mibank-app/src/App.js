import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

require("mibank-components").defineCustomElements(window);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <mi-heading />
        <mi-navigation />
        <mi-section>
          <mi-table />
          <mi-pie-graph />
        </mi-section>
        <mi-section>
          <mi-table />
          <mi-pie-graph />
        </mi-section>
        <mi-section>
          <mi-table />
          <mi-pie-graph />
        </mi-section>
      </div>
    );
  }
}

export default App;
