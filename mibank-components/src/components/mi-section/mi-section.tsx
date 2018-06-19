import { Component } from "@stencil/core";

@Component({
  tag: "mi-section",
  styleUrl: "mi-section.css",
  shadow: true
})
export class MiSection {
  render() {
    return (
      <div class="section">
        <slot name="header" />
        <slot />
        <slot name="footer" />
      </div>
    );
  }
}
