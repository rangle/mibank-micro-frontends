import * as React from "react";

export interface LineChartProps {
  dataSet: Array<any>;
  labels?: Array<string>;
  onClick?: Function;
}

class LineChart extends React.Component<LineChartProps, any, void> {
  private lineGraph;
  private dataSet;
  private labels: Array<string>;

  constructor(props) {
    super(props);
    this.lineGraph = React.createRef();
    this.dataSet = props.dataSet;
    this.labels = props.labels;
  }

  public componentDidMount() {
    this.lineGraph.current.data = {
      datasets: this.dataSet,
      labels: this.labels
    };

    this.lineGraph.current.options = {
      onClick: e => {
        if (this.props.onClick !== undefined)
          this.props.onClick(this.lineGraph.current.getDataAtElement(e));
      },
      scales: {
        yAxes: [
          {
            stacked: false
          }
        ]
      }
    };
  }

  public render() {
    return (
      <div>
        <mi-chart-js type="line" ref={this.lineGraph} />
      </div>
    );
  }
}

export default LineChart;
