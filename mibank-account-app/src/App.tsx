import * as React from "react";
import "./App.css";

import PieChart from "./components/pie-chart";
import Table from "./components/table";

import * as components from "mibank-components";
components.defineCustomElements(window);

export interface AccountProps {
  spending?: Array<object>;
  data?: any[][];
  headings?: Array<string>;
}

export interface State {
  selected: number;
}

interface Spending {
  labels: Array<string>;
  amounts: Array<number>;
}

class AccountData {
  data: Array<Array<number>>;
  headings: Array<string>;
  spending: Array<Spending>;

  generateTable() {
    const labels = ["Savings", "Taxes", "RRSP"];
    return this.data.map((d, i) => [labels[i], ...d]);
  }

  generateLabels(dataIndex: number) {
    const labels = this.spending.map((d, i) => {
      return d.labels;
    });
    return labels[dataIndex];
  }

  generateDataset(dataIndex: number) {
    const colours = [
      "rgb(255, 99, 132)",
      "rgb(75, 192, 192)",
      "rgb(54, 162, 235)"
    ];

    const data = this.spending.map((d, i) => {
      return d.amounts;
    });

    return [{ data: data[dataIndex], backgroundColor: colours }];
  }
}

class App extends React.Component<AccountProps, State, void> {
  private accountData: AccountData;
  constructor(props) {
    super(props);
    this.accountData = new AccountData();
    this.accountData.headings = props.headings;
    this.accountData.data = props.data;
    this.accountData.spending = props.spending;

    this.state = {
      selected: 0
    };
    this.updateSelected = this.updateSelected.bind(this);
  }

  public updateSelected(index: number) {
    this.setState({ selected: index - 1 });
  }

  public render() {
    return (
      <div className="Account">
        <mi-section>
          <mi-grid>
            <div slot="header">
              <mi-heading type="h2">{"Account Balances"}</mi-heading>
            </div>
            <Table
              headings={this.accountData.headings}
              data={this.accountData.generateTable()}
              onRowSelect={this.updateSelected}
            />
            <div slot="sidebar">
              <PieChart
                dataSet={this.accountData.generateDataset(this.state.selected)}
                labels={this.accountData.generateLabels(this.state.selected)}
              />
            </div>
          </mi-grid>
        </mi-section>
      </div>
    );
  }
}

export default App;
