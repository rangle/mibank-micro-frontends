import { storiesOf } from "@storybook/html";
import { withKnobs, number } from "@storybook/addon-knobs";

storiesOf("Pie Graph", module)
  .addDecorator(withKnobs)
  .add("with Knobs", () => {
    const dataSet = [
      {
        data: [
          number("DataPoint1", 10),
          number("DataPoint2", 20),
          number("DataPoint3", 30)
        ],
        backgroundColor: ["red", "yellow", "blue"]
      }
    ];

    const chart = document.createElement("mi-pie-graph");
    chart.data = dataSet;

    return chart;
  });
