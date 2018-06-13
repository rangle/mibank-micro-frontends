import { Component, Prop, State, Element } from "@stencil/core";

@Component({
  tag: "mi-pie-graph",
  shadow: true
})
export class MiPieGraph {
  @Element() graph: any;
  @State() pieChart: any;
  @Prop() first: string;
  @Prop() last: string;

  render() {
    var data = {
      datasets: [
        {
          data: [10, 20, 30],
          backgroundColor: ["red", "yellow", "blue"]
        }
      ],
      labels: ["Red", "Yellow", "Blue"]
    };
    return <mi-chart-js type="pie" data={data} />;
  }
}
