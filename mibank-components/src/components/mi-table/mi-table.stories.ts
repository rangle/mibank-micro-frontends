import { storiesOf } from "@storybook/html";
import { withKnobs, array } from "@storybook/addon-knobs";
import { HTMLTableElement } from "./mi-table";

const stories = storiesOf("Table", module).addDecorator(withKnobs);
stories.add("default", () => {
  const headings = array("Heading", ["Account Name", "Amount"]);
  const data = array("Data", [
    ["Account 1", "$1000"],
    ["Account 2", "$2000"],
    ["Account 3", "$3000"]
  ]);

  const table: HTMLTableElement = <HTMLTableElement>(
    document.createElement("mi-table")
  );

  table.headings = headings;
  table.data = data;

  return table;
});
