/*! Built with http://stenciljs.com */
const { h } = window.mibank;

class MiPieGraph {
    render() {
        var data = {
            datasets: [
                {
                    data: [10, 20, 30],
                    backgroundColor: ["red", "yellow", "blue"]
                }
            ],
            labels: ["Red", "Yellow", "Blue"]
        };
        return h("mi-chart-js", { type: "pie", data: data });
    }
    static get is() { return "mi-pie-graph"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "first": {
            "type": String,
            "attr": "first"
        },
        "graph": {
            "elementRef": true
        },
        "last": {
            "type": String,
            "attr": "last"
        },
        "pieChart": {
            "state": true
        }
    }; }
}

export { MiPieGraph };
