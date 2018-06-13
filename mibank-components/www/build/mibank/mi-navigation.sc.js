/*! Built with http://stenciljs.com */
const { h } = window.mibank;

class MiNavigation {
    render() {
        return h("div", null, "Navigation");
    }
    static get is() { return "mi-navigation"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "first": {
            "type": String,
            "attr": "first"
        },
        "last": {
            "type": String,
            "attr": "last"
        }
    }; }
    static get style() { return ""; }
}

export { MiNavigation };
