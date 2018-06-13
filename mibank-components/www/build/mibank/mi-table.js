/*! Built with http://stenciljs.com */
const { h } = window.mibank;

class MiTable {
    render() {
        return h("div", null, "Table");
    }
    static get is() { return "mi-table"; }
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

export { MiTable };
