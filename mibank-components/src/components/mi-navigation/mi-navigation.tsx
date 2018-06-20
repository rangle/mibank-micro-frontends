import { Component, State, Method, Element, Prop } from "@stencil/core";

export interface NavigationItem {
  label: string;
  link?: string;
}

@Component({
  tag: "mi-navigation",
  styleUrl: "mi-navigation.css"
})
export class MiNavigation {
  @Element() navigationEl: HTMLMiNavigationElement;
  @State() isNavOpen: boolean = false;
  @Prop() navItems: Array<NavigationItem> = [];

  @Method()
  toggleNavigation(): void {
    if (!this.isNavOpen) {
      this.openNavigation();
    } else {
      this.closeNavigation();
    }
  }

  @Method()
  closeNavigation(): void {
    this.navigationEl.querySelector(".sidenav").classList.remove("open");
    this.isNavOpen = false;
  }

  @Method()
  openNavigation(): void {
    this.navigationEl.querySelector(".sidenav").classList.add("open");
    this.isNavOpen = true;
  }

  render() {
    return (
      <div>
        <span onClick={() => this.toggleNavigation()}>open</span>
        <div class="sidenav">
          <a href="javascript:void(0)" onClick={() => this.closeNavigation()}>
            Close
          </a>
          {this.navItems.map(item => (
            <a href={item.link ? item.link : "#"}>{item.label}</a>
          ))}
        </div>
      </div>
    );
  }
}
