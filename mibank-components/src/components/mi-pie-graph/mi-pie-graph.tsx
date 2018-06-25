import { Component, Prop, State, Element } from "@stencil/core";
import { ChartData, ChartDataSets } from "chart.js";

export interface HTMLChartElement extends HTMLElement {
  data: ChartDataSets[];
}

@Component({
  tag: "mi-pie-graph",
  shadow: true
})
export class MiPieGraph {
  @Element() graph: HTMLChartElement;
  @State() pieChart: any;
  @Prop() data: ChartDataSets[];

  getData() {
    debugger;
  }

  render() {
    const data: ChartData = Object.assign(
      {},
      {
        datasets: [],
        labels: ["Red", "Yellow", "Blue"]
      },
      { datasets: this.data }
    );
    return <mi-chart-js type="pie" data={data} />;
  }
}
