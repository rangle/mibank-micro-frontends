import { Component, Prop } from "@stencil/core";

@Component({
  tag: "mi-navigation",
  styleUrl: "mi-navigation.css",
  shadow: true
})
export class MiNavigation {
  @Prop() first: string;
  @Prop() last: string;

  render() {
    return <div>NAVIGATION</div>;
  }
}
