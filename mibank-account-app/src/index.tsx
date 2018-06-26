import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <App
    data={[["Saving", 40], ["Chequing", 50], ["Investments", 50]]}
    backgroundColor={["blue", "green", "red"]}
    labels={["Account", "Balance"]}
  />,
  document.getElementById("root") as HTMLElement
);
