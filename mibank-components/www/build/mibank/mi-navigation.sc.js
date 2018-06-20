/*! Built with http://stenciljs.com */
const { h } = window.mibank;

class MiNavigation {
    constructor() {
        this.isNavOpen = false;
        this.classNames = "sidenav";
    }
    toggleNavigation() {
        console.log(this.navigationEl.childNodes);
        if (!this.isNavOpen) {
            this.openNavigation();
        }
        else {
            this.closeNavigation();
        }
    }
    closeNavigation() {
        this.classNames = "sidenav";
        this.isNavOpen = false;
    }
    openNavigation() {
        this.classNames = "sidenav open";
        this.isNavOpen = true;
    }
    render() {
        return (h("div", null,
            h("span", { onClick: () => this.toggleNavigation() }, "open"),
            h("div", { class: this.classNames },
                h("a", { href: "javascript:void(0)", onClick: () => this.closeNavigation() }, "Close"),
                h("a", { href: "#" }, "About"),
                h("a", { href: "#" }, "Services"),
                h("a", { href: "#" }, "Clients"),
                h("a", { href: "#" }, "Contact Us"))));
    }
    static get is() { return "mi-navigation"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "closeNavigation": {
            "method": true
        },
        "isNavOpen": {
            "state": true
        },
        "navigationEl": {
            "elementRef": true
        },
        "openNavigation": {
            "method": true
        },
        "toggleNavigation": {
            "method": true
        }
    }; }
    static get style() { return ".sidenav[data-mi-navigation] {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #111;\n  overflow-x: hidden;\n  padding-top: 60px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.sidenav.open[data-mi-navigation] {\n  width: 250px;\n}\n\n.sidenav[data-mi-navigation]   a[data-mi-navigation] {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #818181;\n  display: block;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n\n.sidenav[data-mi-navigation]   a[data-mi-navigation]:hover {\n  color: #f1f1f1;\n}\n\n.sidenav[data-mi-navigation]   .closebtn[data-mi-navigation] {\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 36px;\n  margin-left: 50px;\n}"; }
}

export { MiNavigation };
