import * as React from "react";
import "./App.css";
import Table from "./components/table";
import LineChart from "./components/line-chart";

import * as components from "mibank-components";
components.defineCustomElements(window);

export interface InvestmentsProps {}

class LineChartData {
  data: Array<Array<number>>;
  headings: Array<string>;

  generateDataset() {
    const labels = ["APPL", "MSFT", "RNGL"];
    const colours = [
      "rgb(255, 99, 132)",
      "rgb(75, 192, 192)",
      "rgb(54, 162, 235)"
    ];
    const dataset = this.data.map((d, i) => {
      return {
        data: d,
        label: labels[i],
        backgroundColor: colours[i],
        borderColor: colours[i],
        fill: false
      };
    });
    return dataset;
  }
}

class App extends React.Component {
  private investments: LineChartData;
  constructor(props) {
    super(props);
    this.investments = new LineChartData();
    this.investments.headings = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul"
    ];

    this.investments.data = [
      Array.from({ length: 7 }, () => Math.floor(Math.random() * 21)),
      Array.from({ length: 7 }, () => Math.floor(Math.random() * 21)),
      Array.from({ length: 7 }, () => Math.floor(Math.random() * 21))
    ];
  }
  public render() {
    return (
      <div className="Investments">
        <mi-grid>
          <div slot="header">
            <mi-heading type="h2">{"Investments"}</mi-heading>
          </div>
          <Table
            data={this.investments.data}
            headings={this.investments.headings}
          />
          <div slot="sidebar">
            <LineChart
              dataSet={this.investments.generateDataset()}
              labels={this.investments.headings}
            />
          </div>
        </mi-grid>
      </div>
    );
  }
}

export default App;
