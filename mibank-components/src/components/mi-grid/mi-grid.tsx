import { Component } from "@stencil/core";

@Component({
  tag: "mi-grid",
  styleUrl: "mi-grid.css"
})
export class MiGrid {
  render(): JSX.Element {
    return (
      <div class="container">
        <div class="fullwidth">
          <slot name="header" />
        </div>
        <div class="main">
          <slot />
        </div>
        <div class="sidebar">
          <slot name="sidebar" />
        </div>
        <div class="fullwidth">
          <slot name="footer" />
        </div>
      </div>
    );
  }
}
