import * as React from "react";
import "./App.css";

import PieChart from "./components/pie-chart";
import Table from "./components/table";

import * as components from "mibank-components";
components.defineCustomElements(window);

export interface AccountProps {
  backgroundColor?: Array<string>;
  data?: any[][];
  labels?: Array<string>;
}

export interface State {
  selected: any;
}

class App extends React.Component<AccountProps, State, void> {
  private data;
  private backgroundColor;
  private labels;
  constructor(props) {
    super(props);
    const { backgroundColor, data, labels } = props;
    this.data = data;
    this.backgroundColor = backgroundColor;
    this.labels = labels;

    this.state = {
      selected: this.data[0]
    };
    this.updateSelected = this.updateSelected.bind(this);
  }

  private lookupData(index: number): Array<number> {
    return this.data[index - 1];
  }

  public updateSelected(e) {
    this.setState({
      selected: this.lookupData(e)
    });
  }

  public render() {
    const data = this.state.selected;
    const backgroundColor = this.backgroundColor;
    return (
      <div className="Account">
        <mi-section>
          <mi-grid>
            <div slot="header">
              <mi-heading type="h2">{"Account Balances"}</mi-heading>
            </div>
            <Table
              headings={this.labels}
              data={this.data}
              onRowSelect={this.updateSelected}
            />
            <div slot="sidebar">
              <PieChart
                dataSet={[{ data, backgroundColor }]}
                labels={this.labels}
              />
            </div>
          </mi-grid>
        </mi-section>
      </div>
    );
  }
}

export default App;
