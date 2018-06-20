import { Component, Prop } from "@stencil/core";

@Component({
  tag: "mi-heading",
  styleUrl: "mi-heading.css",
  shadow: true
})
export class MiHeading {
  @Prop() type: string = "p";
  @Prop() text: string;

  render() {
    const TextElement = this.type;
    return (
      <TextElement>
        <slot />
      </TextElement>
    );
  }
}
