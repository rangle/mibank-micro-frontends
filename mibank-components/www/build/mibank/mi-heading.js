/*! Built with http://stenciljs.com */
const { h } = window.mibank;

class MiHeading {
    render() {
        return h("div", null, "Heading");
    }
    static get is() { return "mi-heading"; }
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
}

export { MiHeading };
