import * as React from "react";
import "./App.css";

import PieChart from "./components/pie-chart";
import Table from "./components/table";

import * as components from "mibank-components";
components.defineCustomElements(window);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "yellow"
    };
  }
  private data = [
    {
      data: [20, 40],
      backgroundColor: ["yellow", "blue"]
    }
  ];

  public render() {
    return (
      <div className="App">
        <mi-section>
          <mi-heading type="h1">{"TEST"}</mi-heading>
          <Table headings={["Yellow", "Blue"]} data={[this.data[0].data]} />
          <PieChart dataSet={this.data} labels={["Yellow", "Blue"]} />
        </mi-section>
      </div>
    );
  }
}

export default App;
