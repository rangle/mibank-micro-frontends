import { storiesOf } from "@storybook/html";
import { withKnobs, array } from "@storybook/addon-knobs";
import { HTMLChartElement } from "./mi-pie-graph";

storiesOf("Pie Graph", module)
  .addDecorator(withKnobs({ timestamps: true }))
  .add("with Knobs", () => {
    let dataSet = [
      {
        data: array("Data Set", [10, 20, 30]),
        backgroundColor: ["red", "yellow", "blue"]
      }
    ];

    const chart: HTMLChartElement = <HTMLChartElement>(
      document.createElement("mi-pie-graph")
    );

    chart.data = dataSet;
    return chart;
  });
