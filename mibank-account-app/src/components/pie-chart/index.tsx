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
    this.onClick = this.onClick.bind(this);
  }

  private onClick(e) {
    console.log(this.pieGraph.current.getDataAtElement(e));
  }

  public componentDidMount() {
    this.pieGraph.current.data = {
      datasets: this.dataSet,
      labels: ["Red", "Yellow", "Blue"]
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
