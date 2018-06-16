import { configure } from "@storybook/html";
const req = require.context("../src/", true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
