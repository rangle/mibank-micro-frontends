import * as React from "react";

class PieChart extends React.Component {
  protected pieGraph;
  private dataSet;
  constructor(props) {
    super(props);
    this.pieGraph = React.createRef();
    this.dataSet = [
      {
        data: [10, 20, 30],
        backgroundColor: ["red", "yellow", "blue"]
      }
    ];
  }

  public componentDidMount() {
    this.pieGraph.current.data = this.dataSet;
  }

  public render() {
    return (
      <div>
        <mi-pie-graph ref={this.pieGraph} />
      </div>
    );
  }
}

export default PieChart;
