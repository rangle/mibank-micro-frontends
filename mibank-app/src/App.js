import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

require("mibank-components").defineCustomElements(window);

class App extends Component {
  dataSet;
  constructor(props) {
    super(props);
    this.dataSet = [
      {
        data: [10, 20, 30],
        backgroundColor: ["red", "yellow", "blue"]
      }
    ];

    this.pieGraph = React.createRef();
  }
  componentDidMount() {
    this.pieGraph.current.data = this.dataSet;
  }
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
        </mi-section>
        <mi-section>
          <mi-table />
          <mi-pie-graph />
        </mi-section>
        <mi-section>
          <mi-table />
          <mi-pie-graph />
        </mi-section>
        <mi-pie-graph ref={this.pieGraph} />
      </div>
    );
  }
}

export default App;
