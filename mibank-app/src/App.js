import React, { Component } from "react";
import logo from "./logo.svg";
import "mibank-account-app/dist/mibank-account-app.css";
import "mibank-investment-app/dist/mibank-investment-app.css";
import "./App.css";
import Account from "mibank-account-app";
import Investments from "mibank-investment-app";

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
          data={[[40], [50], [50]]}
          spending={[
            {
              labels: ["Entertainment", "Taxes", "Utilities"],
              amounts: [10, 90, 15]
            },
            {
              labels: ["Car Payment", "Mortgage", "Credit Card Bills"],
              amounts: [15, 60, 85]
            },
            {
              labels: ["Rental Income", "Bonus"],
              amounts: [90, 2]
            }
          ]}
          headings={["Account", "Balance"]}
        />
        <Investments
          headings={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]}
          data={[
            Array.from({ length: 7 }, () => Math.floor(Math.random() * 21)),
            Array.from({ length: 7 }, () => Math.floor(Math.random() * 21)),
            Array.from({ length: 7 }, () => Math.floor(Math.random() * 21))
          ]}
        />
      </div>
    );
  }
}

export default App;
