import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <App
    data={[[40], [50], [50]]}
    spending={[
      {
        labels: ["Entertainment", "Taxes", "Utilities"],
        amounts: [10, 90, 15]
      },
      {
        labels: ["Car Payment", "Mortgage", "Credit Card Bills"],
        amounts: [15, 60, 85]
      },
      {
        labels: ["Rental Income", "Bonus"],
        amounts: [90, 2]
      }
    ]}
    headings={["Account", "Balance"]}
  />,
  document.getElementById("root") as HTMLElement
);
