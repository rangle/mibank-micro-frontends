import * as React from "react";

export interface PieChartProps {
  dataSet: Array<any>;
  labels: Array<string>;
}

class PieChart extends React.Component<PieChartProps> {
  private pieGraph;
  private dataSet;
  private labels: Array<string>;

  constructor(props) {
    super(props);
    this.pieGraph = React.createRef();
    this.dataSet = props.dataSet;
    this.labels = props.labels;
    this.onClick = this.onClick.bind(this);
  }

  private onClick(e) {
    console.log(this.pieGraph.current.getDataAtElement(e));
  }

  public componentDidMount() {
    this.pieGraph.current.data = {
      datasets: this.dataSet,
      labels: this.labels
    };

    this.pieGraph.current.options = {
      onClick: e => this.onClick(e)
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
