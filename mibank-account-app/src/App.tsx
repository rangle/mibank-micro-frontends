import * as React from "react";
import "./App.css";

import PieChart from "./components/pie-chart";
import Table from "./components/table";

import * as components from "mibank-components";
components.defineCustomElements(window);

class App extends React.Component {
  private data = [
    {
      data: [40, 20, 40],
      backgroundColor: ["Red", "Yellow", "Blue"]
    }
  ];

  public render() {
    return (
      <div className="App">
        <mi-heading type="h2">{"TEST"}</mi-heading>
        <Table
          headings={this.data[0].backgroundColor}
          data={[this.data[0].data]}
        />
        <PieChart dataSet={this.data} />
      </div>
    );
  }
}

export default App;
