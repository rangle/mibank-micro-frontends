import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <App
      headings={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]}
      data={[
        Array.from({ length: 7 }, () => Math.floor(Math.random() * 21)),
        Array.from({ length: 7 }, () => Math.floor(Math.random() * 21)),
        Array.from({ length: 7 }, () => Math.floor(Math.random() * 21))
      ]}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
