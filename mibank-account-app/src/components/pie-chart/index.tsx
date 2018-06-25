import * as React from "react";

export interface PieChartProps {
  dataSet: Array<any>;
}

class PieChart extends React.Component<PieChartProps> {
  private pieGraph;
  private dataSet;
  constructor(props) {
    super(props);
    this.pieGraph = React.createRef();
    this.dataSet = props.dataSet;
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
