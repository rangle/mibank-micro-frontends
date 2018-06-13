/*! Built with http://stenciljs.com */
const { h } = window.mibank;

class MiPieGraph {
    render() {
        return h("div", null, "Pie Graph");
    }
    static get is() { return "mi-pie-graph"; }
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

export { MiPieGraph };
