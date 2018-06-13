import { Component, Prop } from "@stencil/core";

@Component({
  tag: "mi-table",
  //   styleUrl: 'my-component.css',
  shadow: true
})
export class MiTable {
  @Prop() first: string;
  @Prop() last: string;

  render() {
    return <div>Table</div>;
  }
}
