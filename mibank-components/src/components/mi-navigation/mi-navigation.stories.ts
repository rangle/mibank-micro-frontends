import { storiesOf } from "@storybook/html";
import { withKnobs, button } from "@storybook/addon-knobs";

const stories = storiesOf("Navigation", module).addDecorator(withKnobs);
stories.add("default", () => `<mi-navigation></mi-navigation>`);

stories.add(
  "External Control",
  () => {
    const el = document.createElement("mi-navigation");
    let isNavOpen: boolean = false;
    let label = isNavOpen ? "Close Navigation" : "Open Navigation";
    const handler = () => {
      const navigationEl = document.querySelector("mi-navigation");
      isNavOpen = true;
      navigationEl.openNavigation();
    };
    button(label, handler);
    return el;
  },
  {
    timestamps: true
  }
);
