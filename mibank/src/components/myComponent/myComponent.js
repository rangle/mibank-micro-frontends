import React, { Component } from "react";
require("mibank-navigation").defineCustomElements(window);

class MyComponent extends Component {
  render() {
    return <my-component first="This is " last="Stencil in React!" />;
  }
}

export default MyComponent;
