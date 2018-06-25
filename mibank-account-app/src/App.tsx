import * as React from "react";
import "./App.css";

import PieChart from "./components/pie-chart";

import * as components from "mibank-components";
components.defineCustomElements(window);

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <mi-heading type="h2">{"TEST"}</mi-heading>
        <PieChart />
      </div>
    );
  }
}

export default App;
