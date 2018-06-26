import * as React from "react";
import "./App.css";

import PieChart from "./components/pie-chart";
import Table from "./components/table";

import * as components from "mibank-components";
components.defineCustomElements(window);

interface AccountProps {
  backgroundColor?: Array<string>;
  data?: any[][];
}

interface State {
  selected: any;
}

class App extends React.Component<AccountProps, State, any> {
  private data;
  private backgroundColor;
  constructor(props) {
    super(props);
    this.data = [[20, 40, 90], [10, 90, 40]];
    this.backgroundColor = ["pink", "blue", "red"];

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
      <div className="App">
        <mi-section>
          <mi-heading type="h1">{"TEST"}</mi-heading>
          <Table
            headings={["Pink", "Blue", "Red"]}
            data={this.data}
            onRowSelect={this.updateSelected}
          />
          <PieChart
            dataSet={[{ data, backgroundColor }]}
            labels={["Pink", "Blue", "Red"]}
          />
        </mi-section>
      </div>
    );
  }
}

export default App;
