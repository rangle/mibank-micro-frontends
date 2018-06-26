import * as React from "react";
import "./App.css";
import Table from "./components/table";
import LineChart from "./components/line-chart";

import * as components from "mibank-components";
components.defineCustomElements(window);

export interface InvestmentsProps {
  data: Array<Array<number>>;
  headings: Array<string>;
}

export interface InvestmentsState {
  selected?: any;
}

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

class App extends React.Component<InvestmentsProps, InvestmentsState, {}> {
  private investments: LineChartData;
  constructor(props) {
    super(props);
    this.investments = new LineChartData();
    this.investments.headings = props.headings;
    this.investments.data = props.data;
    this.onClick = this.onClick.bind(this);
    this.state = { selected: null };
  }
  private onClick(e) {
    const dataSetIndex = e._datasetIndex;
    const dataIndex = e._index;
    this.setState({
      selected: { dataSetIndex, dataIndex }
    });
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
            selected={this.state.selected}
          />
          <div slot="sidebar">
            <LineChart
              dataSet={this.investments.generateDataset()}
              labels={this.investments.headings}
              onClick={this.onClick}
            />
          </div>
        </mi-grid>
      </div>
    );
  }
}

export default App;
