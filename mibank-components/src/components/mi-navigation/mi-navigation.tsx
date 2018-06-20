import { Component, State, Method } from "@stencil/core";

@Component({
  tag: "mi-navigation",
  styleUrl: "mi-navigation.css",
  shadow: true
})
export class MiNavigation {
  @State() navOpen: boolean = false;
  private classNames: string = "sidenav";

  @Method()
  toggleNavigation() {
    if (!this.navOpen) {
      this.classNames = "sidenav open";
      this.navOpen = true;
    } else {
      this.classNames = "sidenav";
      this.navOpen = false;
    }
  }

  @Method()
  closeNavigation() {
    if (this.navOpen) {
      this.classNames = "sidenav";
      this.navOpen = false;
    }
  }

  render() {
    return (
      <div>
        <span onClick={() => this.toggleNavigation()}>open</span>
        <div class={this.classNames}>
          <a href="javascript:void(0)" onClick={() => this.closeNavigation()}>
            Close
          </a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    );
  }
}
