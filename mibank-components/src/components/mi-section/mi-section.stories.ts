import { storiesOf } from "@storybook/html";
import { withKnobs, text } from "@storybook/addon-knobs";

const stories = storiesOf("Section", module).addDecorator(withKnobs);

stories.add(
  "In-line Content",
  () =>
    `<mi-section>${text(
      "In-line Content",
      "This shows in line content"
    )}</mi-section>`
);

stories.add(
  "Header Slot",
  () =>
    `<mi-section><h1 slot='header'>${text(
      "Header Text",
      "Header"
    )}</h1><p>Middle Content</p><footer slot="footer">footer</footer></mi-section>`
);
