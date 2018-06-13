import { Component, Prop } from "@stencil/core";

@Component({
  tag: "mi-section",
  styleUrl: "mi-section.css",
  shadow: true
})
export class MiSection {
  @Prop() first: string;
  @Prop() last: string;

  render() {
    return <div>Section</div>;
  }
}
