import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <App
    headings={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]}
    data={[
      Array.from({ length: 7 }, () => Math.floor(Math.random() * 21)),
      Array.from({ length: 7 }, () => Math.floor(Math.random() * 21)),
      Array.from({ length: 7 }, () => Math.floor(Math.random() * 21))
    ]}
  />,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
