import typescript from "rollup-plugin-typescript2";
import css from "rollup-plugin-css-porter";

export default {
  entry: "./src/App.tsx",
  dest: "./dist/bundle.js",
  format: "cjs",
  plugins: [typescript(), css({ dest: "dist/mibank-investment-app.css" })],
  external: ["mibank-components", "react"]
};
