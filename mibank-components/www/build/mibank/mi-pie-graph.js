/*! Built with http://stenciljs.com */
const { h } = window.mibank;

class MiPieGraph {
    render() {
        const data = {
            datasets: this.data,
            labels: ["Red", "Yellow", "Blue"]
        };
        return h("mi-chart-js", { type: "pie", data: data });
    }
    static get is() { return "mi-pie-graph"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "data": {
            "type": "Any",
            "attr": "data"
        },
        "graph": {
            "elementRef": true
        },
        "pieChart": {
            "state": true
        }
    }; }
}

export { MiPieGraph };
