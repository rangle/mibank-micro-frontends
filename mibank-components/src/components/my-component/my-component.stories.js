import { storiesOf } from "@storybook/html";
const stories = storiesOf("My component", module);
stories.add(
  "default",
  () =>
    `<my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>`
);
