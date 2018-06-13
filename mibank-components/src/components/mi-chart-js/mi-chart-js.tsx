import { Component, Prop, Element } from "@stencil/core";
import Chart from "chart.js";

@Component({
  tag: "mi-chart-js"
})
export class ChartJS {
  chart: HTMLCanvasElement;
  @Element() canvas: HTMLElement;
  @Prop() type: string;
  @Prop() data: object;

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
      <div>
        <canvas id="chart" width="400" height="400" />
      </div>
    );
  }
}
