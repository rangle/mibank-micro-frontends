import { Component, Prop } from "@stencil/core";

@Component({
  tag: "mi-heading",
  //   styleUrl: 'my-component.css',
  shadow: true
})
export class MiHeading {
  @Prop() first: string;
  @Prop() last: string;

  render() {
    return <div>Heading</div>;
  }
}
