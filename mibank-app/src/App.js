import React, { Component } from "react";
import logo from "./logo.svg";
import "mibank-account-app/dist/mibank-account-app.css";
import "./App.css";
import Account from "mibank-account-app";

require("mibank-components").defineCustomElements(window);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <mi-heading type="h1">{"Welcome to MiBank"}</mi-heading>
          <mi-navigation />
        </header>
        <Account
          data={[["Saving", 40], ["Chequing", 50], ["Investments", 50]]}
          backgroundColor={["blue", "green", "red"]}
          labels={["Account", "Balance"]}
        />
      </div>
    );
  }
}

export default App;
