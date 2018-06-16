import { Component, Prop, Element, Method } from "@stencil/core";
import Chart, { ChartData, ChartDataSets } from "chart.js";

@Component({
  tag: "mi-chart-js",
  styleUrl: "mi-chart-js.css"
})
export class ChartJS {
  chart: Chart;
  @Element() canvas: HTMLElement;
  @Prop() type: string;
  @Prop() data: ChartData;

  @Method()
  addData(label: string, data: ChartDataSets) {
    this.chart.data.datasets.push(data);
    this.chart.data.labels.push(label);
    this.chart.update();
  }

  componentDidLoad(): void {
    this.drawChart();
  }

  drawChart(): void {
    const ctx = this.canvas.getElementsByTagName("canvas")[0].getContext("2d");
    this.chart = new Chart(ctx, {
      type: this.type,
      data: this.data
    });
  }

  render(): JSX.Element {
    return (
      <div class="chart">
        <canvas id="chart" width="400" height="400" />
      </div>
    );
  }
}
