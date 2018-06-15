import { Component, Prop, State, Element } from "@stencil/core";

@Component({
  tag: "mi-pie-graph",
  shadow: true
})
export class MiPieGraph {
  @Element() graph: any;
  @State() pieChart: any;
  @Prop() data: object;

  render() {
    const data = {
      datasets: this.data,
      labels: ["Red", "Yellow", "Blue"]
    };
    return <mi-chart-js type="pie" data={data} />;
  }
}
