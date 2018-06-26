import { Component, Prop, Element, Method } from "@stencil/core";
import Chart, {
  ChartData,
  ChartDataSets,
  ChartOptions
} from "chart.js/dist/chart.bundle.js";

export interface PieSectionData {
  label: string;
  value: number;
}

@Component({
  tag: "mi-chart-js",
  styleUrl: "mi-chart-js.css"
})
export class ChartJS {
  chart: Chart;
  @Element() canvas: HTMLElement;
  @Prop() ref?: any;
  @Prop() options?: ChartOptions;
  @Prop() type: string;
  @Prop() data: ChartData;

  @Method()
  addData(label: string, data: ChartDataSets): void {
    this.chart.data.datasets.push(data);
    this.chart.data.labels.push(label);
    this.chart.update();
  }

  @Method()
  getDataAtElement(evt): PieSectionData {
    return this.chart.getElementAtEvent(evt)[0];
    // const label = this.chart.data.labels[point._index];
    // const value = this.chart.data.datasets[point._datasetIndex].data[
    //   point._index
    // ];
    // return { label, value };
  }

  componentDidLoad(): void {
    this.drawChart();
  }

  @Method()
  updateChart(data: ChartDataSets): void {
    this.chart.data = data;
    this.chart.update();
  }

  drawChart(): void {
    const ctx = this.canvas.getElementsByTagName("canvas")[0].getContext("2d");
    this.chart = new Chart(ctx, {
      type: this.type,
      data: this.data,
      options: Object.assign({}, this.options)
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
