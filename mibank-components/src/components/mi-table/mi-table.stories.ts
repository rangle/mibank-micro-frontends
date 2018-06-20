import { storiesOf } from "@storybook/html";
import { HTMLTableElement } from "./mi-table";

const stories = storiesOf("Table", module);
stories.add("default", () => {
  const headings = ["Account Name", "Amount"];
  const data = [
    ["Account 1", "$1000"],
    ["Account 2", "$2000"],
    ["Account 3", "$3000"]
  ];

  const table: HTMLTableElement = <HTMLTableElement>(
    document.createElement("mi-table")
  );

  table.headings = headings;
  table.data = data;

  return table;
});
