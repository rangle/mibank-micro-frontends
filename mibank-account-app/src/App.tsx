import * as React from "react";
import "./App.css";

import PieChart from "./components/pie-chart";
import Table from "./components/table";

import * as components from "mibank-components";
components.defineCustomElements(window);

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <mi-heading type="h2">{"TEST"}</mi-heading>
        <Table />
        <PieChart />
      </div>
    );
  }
}

export default App;
