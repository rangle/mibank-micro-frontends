import { storiesOf } from "@storybook/html";
import { withKnobs, text } from "@storybook/addon-knobs";

const stories = storiesOf("Heading", module).addDecorator(withKnobs);

stories.add("Type Scale", () => {
  const typeScale = [
    {
      type: "h1"
    },
    {
      type: "h2"
    },
    {
      type: "h3"
    },
    {
      type: "h4"
    },
    {
      type: "p"
    }
  ];

  const textValue = text("Text", "MiBank Heading Component");

  const headings = typeScale.map(
    item => `<mi-heading type="${item.type}">${textValue}</mi-heading>`
  );

  return headings.join("");
});
