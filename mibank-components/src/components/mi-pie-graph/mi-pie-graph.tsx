import { Component, Prop } from "@stencil/core";

@Component({
  tag: "mi-pie-graph",
  //   styleUrl: 'my-component.css',
  shadow: true
})
export class MiPieGraph {
  @Prop() first: string;
  @Prop() last: string;

  render() {
    return <div>Pie Graph</div>;
  }
}
