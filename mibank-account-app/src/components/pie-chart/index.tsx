import * as React from "react";

export interface PieChartProps {
  dataSet: Array<any>;
  labels: Array<string>;
  onPieSelect?: Function;
}

class PieChart extends React.Component<PieChartProps, any, void> {
  private pieGraph;
  private dataSet;
  private labels: Array<string>;

  constructor(props) {
    super(props);
    this.pieGraph = React.createRef();
    this.dataSet = props.dataSet;
    this.labels = props.labels;
  }

  public componentDidUpdate() {
    this.pieGraph.current.updateChart({
      datasets: this.props.dataSet,
      labels: this.props.labels
    });
  }

  public componentDidMount() {
    this.pieGraph.current.data = {
      datasets: this.dataSet,
      labels: this.labels
    };
  }

  public render() {
    return (
      <div>
        <mi-chart-js type="pie" ref={this.pieGraph} />
      </div>
    );
  }
}

export default PieChart;
